import React from 'react';
import axios from 'axios';

import requiresAuth from './Auth/requiresAuth.js';

class Users extends React.Component {
  state = {
    users: []
  }

  render() {
    return (
      <>
        <h2>Users</h2>

        <ul>
          {
            this.state.users.map(u => (
              <li key={u.id}>{u.username}</li>
            ))
          }
        </ul>
      </>
    )
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/api/users';

    axios
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Users);
