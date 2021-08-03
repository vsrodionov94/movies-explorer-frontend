import { Route, Switch } from "react-router-dom";

import Main from './../Main/Main';
import Movies from '../Movies/Movies';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Profile from './../Profile/Profile';
import SavedMovies from './../SavedMovies/SavedMovies';

import './App.css';
import NotFound from './../NotFound/NotFound';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          {/* <Route path="/*">
            <NotFound />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
