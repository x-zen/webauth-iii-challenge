import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component {
  state = {
    credentials: {
      username: '',
      password: '',
      department: ''
    }
  };


    handleChange = event => {
      const {id, value} = event.target;

      this.setState({ [id]: value });
    };

    submitForm = event => {
      event.preventDefault();
      const endpoint = 'http://localhost:5000/api/auth/register';

      axios
        .post(endpoint, this.state)
        .then(res => {
          this.props.history.push('/login');
        })
        .catch(err => {
          console.error('Login Error', err);
        });
    }

  render() {
    return(
      <>
        <h2>Sign Up</h2>
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
            <label htmlFor='department' />
            <input
              type='text'
              id='department'
              value={this.state.department}
              onChange={this.handleChange}
          />
          </div>
          <div>
            <button type='submit'>Sign Up!</button>
          </div>
        </form>
      </>
    )
  }

}

export default SignUp;
