import React from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './components/Clock';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
      <Clock />
      <div>
        <h2>Manejando eventos</h2>
        <Toggle />
      </div>
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