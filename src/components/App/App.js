import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import * as auth from "../../utils/Auth.js";

import Main from './../Main/Main';
import Movies from '../Movies/Movies';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Profile from './../Profile/Profile';
import SavedMovies from './../SavedMovies/SavedMovies';

import './App.css';
import Popup from "../Popup/Popup";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentMoviesCount, setCurrentMoviesCount] = useState(0);
  const [moviesCount, setMoviesCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userMovies, setUserMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [viewMovies, setViewMovies] = useState([]);
  const [search, setSearch] = useState({name: '', isShort: false});

  const history = useHistory();

  window.onresize = () => {
    if (window.innerWidth <= 768) setMoviesCount(8);
    if (window.innerWidth <= 480) setMoviesCount(5);
  };

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies')
    }
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    mainApi.setToken(token);
    tokenCheck();
  }, []);
  
  useEffect(() => {
    Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
      .then(([user, movies]) => {
        setCurrentUser(user.data);
        setUserMovies(movies.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getContent(token).then(() => {
          setLoggedIn(true);
      })
      .catch(err => console.error(err));
    }
  };
  
  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/signin');
  };

  const onClose = () => {
    setIsPopupOpen(false);
  };

  const searchMovies = () => {
    if (!movies || movies.length === 0) {
      setLoading(true);
      moviesApi.getMoviesData().then((data) => {
        setMovies(data.map(movie => {
          return {
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          trailer: movie.trailerLink,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          description: movie.description,
          year: movie.year,
          duration: movie.duration,
          director: movie.director,
          country: movie.country,
          movieId: movie.id,
          }
        }));
        setMoviesFromFilter();
      }).catch(err => {
        setSearchError(true);
        alert(err);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setMoviesFromFilter();
    }
  };
  
  const setMoviesFromFilter = () => {
    const {name, isShort} = search;
    let filteredMovies = movies.filter(el => el.nameRU.includes(name));
    if (isShort) filteredMovies = filteredMovies.filter(el => el.duration <= 40);
    setCurrentMoviesCount(moviesCount);
    setViewMovies([]);
    for (let i = 0; i < currentMoviesCount; i += 1) {
      if (filteredMovies[i]) {
        setViewMovies(oldItems => [...oldItems, filteredMovies[i]]);
      };
    }
  };

  const searchUserMovies = ({name, isShort}) => {
    let filteredMovies = userMovies.filter(el => el.nameRU.includes(name));
    if (isShort) filteredMovies = filteredMovies.filter(el => el.duration <= 40);
    setUserMovies(filteredMovies);
  };

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
      .then(token => {
        localStorage.setItem('token', token.data);
        mainApi.setToken(localStorage.getItem('token'));
        tokenCheck();
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        setPopupMessage('Неверные логин или пароль');
        setIsPopupOpen(true);
      });
  };

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then(() => {
      handleLogin(email, password);
    })
    .catch(err => {
      setPopupMessage('Что-то пошло не так...');
      setIsPopupOpen(true);
    });  
  };

  const handleLikeMovie = (movie) => {
    const isLiked = userMovies.some(el => el.movieId === movie.movieId);
    if (isLiked) {
      const movieId = userMovies.find(el => el.movieId === movie.movieId)._id;
      mainApi
        .removeMovie(movieId)
        .then((removedMovie) => {
          const newMovies = userMovies.filter(el => el._id !== removedMovie.data._id)
          setUserMovies(newMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi
        .addMovie(movie)
        .then((newMovie) => {
          setUserMovies([newMovie.data, ...userMovies]);
          movies.forEach(el => {
            if (el.movieId === newMovie.data.movieId) el = newMovie.data;
          });
          setMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpdateUser = (data) => {
    mainApi
      .setUserData(data)
      .then(res => {
        setCurrentUser(res.data);
        setPopupMessage('Данные успешно обновлены!');
        setIsPopupOpen(true);
      })
      .catch((err) => {
        setPopupMessage('Что-то пошло не так...');
        setIsPopupOpen(true);
    });
  };

  const handleMoreMovies = () => {
    setCurrentMoviesCount(currentMoviesCount + moviesCount);
    const {name, isShort} = search;
    let filteredMovies = movies.filter(el => el.nameRU.includes(name));
    if (isShort) filteredMovies = filteredMovies.filter(el => el.duration <= 40);
    setViewMovies([]);
    for (let i = 0; i < currentMoviesCount; i += 1) {
      if (filteredMovies[i]) {
        setViewMovies(oldItems => [...oldItems, filteredMovies[i]]);
      };
    }
  };

  useEffect(() => {
    searchMovies();
  }, [search]);

  return (
    <CurrentUserContext.Provider value={currentUser}> 
      <div className="App">
          <Switch>
            <Route path="/signin">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path="/signup" >
              <Register handleRegister={handleRegister}/>
            </Route>
            <ProtectedRoute 
              component={Profile}
              path="/profile" 
              loggedIn={loggedIn}
              handleUpdateUser={ handleUpdateUser }
              logOut={logOut}
            />
            <ProtectedRoute 
              component={Movies}
              path="/movies"
              loggedIn={loggedIn}
              movies={viewMovies}
              onMovieLike={handleLikeMovie}
              userMovies={userMovies}
              loading={loading}
              searchError={searchError}
              onMoreMovies={handleMoreMovies}
              setSearch={setSearch}
            />
            <ProtectedRoute
              component={SavedMovies}
              path="/saved-movies"
              loggedIn={loggedIn}
              userMovies={userMovies}
              getMovies={searchUserMovies}
              movies={userMovies}
              onMovieLike={handleLikeMovie}
              loading={loading}
            />
            <Route path="/">
              <Main loggedIn={loggedIn} />
            </Route>
            <Route exact path="/">
            {loggedIn ? '' : <Redirect to="/signup" />}
            </Route>
          </Switch>
          <Popup isOpen={isPopupOpen} onClose={onClose} message={ popupMessage } />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
