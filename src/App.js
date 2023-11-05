import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  render() {

    return (
      <main className='main-container'>
        <h1 className='main-container__header'>
         Apply Course now!
        </h1>
        <p className='main-container__subheader'>Fill in the form and get course!</p>
          <Form />
      </main>
    );
  }
}

export default App;
