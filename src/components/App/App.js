import { Route, Switch, useHistory } from "react-router-dom";
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
  const [normalRegistration, setNormalRegistration]=useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({
    email: '',
    _id: ''
  });
  const history = useHistory();

  // запрос данных с сервера (профиль и карточки)  
  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getInitialMovies(), mainApi.getUserData()])
      .then(([cardData, user]) => {
        setUserData(user.data);
        setMovies(cardData.data);
      })
      .catch(err => {
        alert(err);
      })
      history.push('/');
    }
  }, [loggedIn, history]);
    // запрос данных с сервера (профиль и карточки)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token){
      return;
    }
    mainApi.setToken(token);
  }, []);

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
      .then(token => {
        localStorage.setItem('token', token.data);
        mainApi.setToken(localStorage.getItem('token'));
        tokenCheck();
        setLoggedIn(true);
      })
      .catch(err => console.error(err));
  }

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then(() => {
      setNormalRegistration(true);
    })
    .catch(err => {
      setNormalRegistration(false);
    });  
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if(token){
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
    history.push('/sign-in');
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
            <ProtectedRoute path="/movies" loggedIn={loggedIn} >
              <Movies />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" loggedIn={loggedIn} >
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} >
              <SavedMovies />
            </ProtectedRoute>
            <Route path="/">
              <Main loggedIn={loggedIn} />
            </Route>
          </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
