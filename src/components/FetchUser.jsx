import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Moly</span>
        <button className="get-users-btn" onClick={getUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Get Users'}
        </button>
      </nav>
      <div className="user-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
