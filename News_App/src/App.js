// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
            <NavBar/>
              <Routes>
                <Route path='/'  element={<News pageSize = {8} category="general" key="home"/>}/>
                <Route path='/business'  element={<News pageSize = {8} key="business" category="business"/>}/>
                <Route path='/entertainment'  element={<News pageSize = {8} key="entertainment" category="entertainment"/>}/>
                <Route path='/general'  element={<News pageSize = {8} key="general" category="general"/>}/>
                <Route path='/health'  element={<News pageSize = {8} key="health" category="health"/>}/>
                <Route path='/science' element={<News pageSize = {8} key="science"  category="science"/>}/>
                <Route path='/sports'  element={<News pageSize = {8} key="sports" category="sports"/>}/>
                <Route path='/technology'  element={<News pageSize = {8} key="technology" category="technology"/>}/>
            </Routes>
         </Router>
      </div>
    )
  }
}














