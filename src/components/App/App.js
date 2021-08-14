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

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  // const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false)
  const [search, setSearch] = useState({ name: '', isShort: false });
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [normalRegistration, setNormalRegistration] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userMovies, setUserMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [viewMovies, setViewMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData().then((user) => {
      })
      .catch(err => {
        alert(err);
      })
      history.push('/');
    }
  }, [loggedIn, history]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token){
      return;
    }
    mainApi.setToken(token);
  }, []);

  useEffect(() => {
    setViewMovies(foundMovies);
  }, [foundMovies]);

  useEffect(() => {
    setViewMovies(userMovies);
  }, [userMovies]);

  const filterMovies = (movies) => {
    let filteredMovies = movies.filter(el => el.nameRU.includes(search.name));
    if (search.isShort) filteredMovies = filteredMovies.filter(el => el.duration <= 40);
    setFoundMovies(filteredMovies);
  }

  const searchMovies = ({name, isShort}) => {
    setSearch({name, isShort});
    setLoading(true);
    moviesApi.getMoviesData().then((movies) => {
      movies = movies.map(movie => {
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
      })
      filterMovies(movies);
    }).catch(err => {
      setSearchError(true);
      alert(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  const searchUserMovies = ({name, isShort}) => {
    let filteredMovies = userMovies.filter(el => el.nameRU.includes(search.name));
    if (search.isShort) filteredMovies = filteredMovies.filter(el => el.duration <= 40);
    setViewMovies(filteredMovies);
  }

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
      .then(token => {
        localStorage.setItem('token', token.data);
        mainApi.setToken(localStorage.getItem('token'));
        tokenCheck();
        setLoggedIn(true);
        history.push('/profile');
      })
      .catch(err => console.error(err));
  };

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then(() => {
      setNormalRegistration(true);
    })
    .catch(err => {
      setNormalRegistration(false);
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
          viewMovies.forEach(el => {
            if (el.movieId === newMovie.data.movieId) el = newMovie.data;
          })
          setViewMovies(viewMovies)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleUpdateUser = (data) => {
    mainApi
      .setUserData(data)
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
      console.log(err);
    });
  }

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
  
  useEffect(() => {
    tokenCheck();
  },[]);

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/signin');
  };

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
              getMovies={searchMovies}
              movies={viewMovies}
              onMovieLike={handleLikeMovie}
              userMovies={userMovies}
              loading={loading}
              searchError={searchError}
            />
            <ProtectedRoute
              component={SavedMovies}
              path="/saved-movies"
              loggedIn={loggedIn}
              userMovies={userMovies}
              getMovies={searchUserMovies}
              movies={viewMovies}
              onMovieLike={handleLikeMovie}
              loading={loading}
            />
            <Route path="/">
              <Main loggedIn={loggedIn} />
            </Route>
            <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-up" />}
          </Route>
          </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
