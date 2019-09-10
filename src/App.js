import React from 'react';
import AllChars from './components/AllChars'
import NavBar from './components/NavBar'
import Routes from './components/routes'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      
    <div className="container">
       <NavBar />
    <Routes/>  

    </div> 
    </div>
    </Provider>
  );
}

export default App;
