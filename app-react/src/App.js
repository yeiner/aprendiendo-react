import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
          Hello, {formatName(user)}
      </h1>      
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Yeiner',
  lastName: 'Morales'
};

export default App;
