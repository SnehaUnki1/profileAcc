import React from 'react';
import './App.css';
import SlideNav from './helper/SlideNav';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Educn';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <SlideNav/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/home'  component={ Home }/>
        <Route path='/about'  component={About}/>
        <Route path='/edu'  component={ Education }/>
        <Route path='/skills'  component={Skills}/>
        <Route path='/work'  component={Work}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
     
      
    </Router>

    
    
    

  );
}

export default App;
