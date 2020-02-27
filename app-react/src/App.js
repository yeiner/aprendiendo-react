import React from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
      <Clock />
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