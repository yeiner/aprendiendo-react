import React from 'react'
import logo from './logo.svg'
import './App.css'

import Clock from './components/Clock'
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
import Page from './components/Page/Page'
import NameForm from './components/Formulario/NameForm'
import TextArea from './components/Formulario/TextArea'
import FlavorForm from './components/Formulario/FlavorForm'
import Reservation from './components/Formulario/Reservation'

function App () {
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
      <Clock />
      <div>
        <h2>Manejando eventos</h2>
        <Toggle />
      </div>
      <div>
        <h2>Renderizado condicional</h2>
        <LoginControl />
      </div>
      <div>
        <h2>If en una línea con operador lógico && </h2>
        <MailBox unreadMessages={messages} />
      </div>
      <div>
        <br />
        <h2>Evitar que el componente se renderice. </h2>
        <Page />
      </div>
      <br />
      <br />
      <div>
        <h2>Formularios</h2>
        <NameForm />
        <br />
        <TextArea />
        <br />
        <FlavorForm />
        <br />
        <Reservation />
        
      </div>
    </div>
  );
}

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Yeiner',
  lastName: 'Morales'
}

function MailBox (props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}

const messages = ['React', 'Re : React', 'Re:Re: React']

export default App
