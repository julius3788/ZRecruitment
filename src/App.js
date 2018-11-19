
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Quiz1 from './components/quiz1';
import Quiz2 from './components/quiz2';
import Login from './components/Login';
import ResultTest from './components/resultTest';
//import axios from 'axios'
//import Footer from './components/footer'
//import About from './pages/About'
import Home from './pages/home'
//import User from './pages/user'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './config/store'
import Footer from './components/Footer';

const styles = {
  paperContainer: {
      height: 1356,
      backgroundImage: `url(${"https://www.fg-a.com/wallpapers/white-background-diamond-plate.jpg"})`
  },

  };

class App extends Component {
  render() {
    return (
      <div>
      <Provider store={myStore}>
      <div style={styles.paperContainer}>
      <BrowserRouter>
        <div>
          <div style={{ paddingLeft: 1, paddingRight: 1 }}>
           <NavBar />          
          </div>
          <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 10 }}>
        
          <Route exact path="/" render={() => (<Login/>)} />
          <Route path="/home" component={Home} />
            <Route path="/quiz1" component={Quiz1} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/login" component={Login} />           
            <Route path="/result" component={ResultTest} />       
          </div>
          </div>     
        
        </BrowserRouter>   
        <div class = 'footer'>    
          <Footer/> 
          </div>
        </div>      
        </Provider>
        </div>
    );
  }
}

export default App;
