import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import Login from './comps/Auth/Login.js';
import Users from './comps/Users.js';
import SignUp from './comps/Auth/SignUp.js';


class App extends Component {
  logout = () => {
    localStorage.removeItem('jwt')
  }

  render() {
    return (
      <>
        <header>
          <NavLink to='/register'>Sign Up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/login'>Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/users'>Users</NavLink>
          &nbsp;|&nbsp;
          <button type='button' onClick={this.logout}>Log Out</button>
        </header>

        <main>
          <Route path='/login' component={ Login } />
          <Route path='/users' component={ Users } />
          <Route path='/register' component={ SignUp } />
        </main>
      </>
    );
  }
}

export default App;
