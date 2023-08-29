import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Yk Demo Project</div>
        <button onClick={getUsers} className="get-users-button">
          Get Users
        </button>
      </nav>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
