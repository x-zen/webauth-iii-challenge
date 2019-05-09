import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  state = {
    credentials: {
      username: 'admin',
      password: 'pass'
    }
  };

    handleChange = event => {
      const {id, value} = event.target;

      this.setState({ [id]: value });
    };

    submitForm = event => {
      event.preventDefault();
      const endpoint = 'http://localhost:5000/api/auth/login';

      axios
        .post(endpoint, this.state)
        .then(res => {
          localStorage.setItem('jwt', res.data.token);
          this.props.history.push('/users');
        })
        .catch(err => {
          console.error('Login Error', err);
        });
    }

  render() {
    return(
      <>
        <h2>Please Log In</h2>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor='username' />
            <input
              type='text'
              id='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='password' />
            <input
              type='password'
              id='password'
              value={this.state.password}
              onChange={this.handleChange}
          />
          </div>
          <div>
            <button type='submit'>Log in!</button>
          </div>
        </form>
      </>
    )
  }

}

export default Login;
