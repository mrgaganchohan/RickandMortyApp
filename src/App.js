import React from 'react';
import AllChars from './components/AllChars'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      
    <div className="container">
        <AllChars />
        

    </div> 
    </div>
    </Provider>
  );
}

export default App;
