import { Route, Switch, ProtectedRoute} from "react-router-dom";
import { useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from './../Main/Main';
import Movies from '../Movies/Movies';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Profile from './../Profile/Profile';
import SavedMovies from './../SavedMovies/SavedMovies';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}> 
      <div className="App">
          <Switch>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <ProtectedRoute path="/movies">
              <Movies />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies">
              <SavedMovies />
            </ProtectedRoute>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
