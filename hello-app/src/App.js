
import './App.css';
import {useState} from 'react'
import StateFull from './components/StateFull'
import StateLess from './components/StateLess'
function App() {

   
 
  return (
    <div className="App">
       <StateFull />
       <StateLess fname="sushant" lname="patil" email="patil@gmail.com" />
    </div>
  );
}

export default App;

