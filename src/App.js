import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component {
  render(){
    return(
      <>
        <div>Helo class component </div>
        <Navbar></Navbar>
        <News/>
      </>
    )
    
  }
}