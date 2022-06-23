import React,{useEffect} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Homepage from './components/Homepage/Homepage';
import RandomMeal from './components/RandomMeal/RandomMeal';


function App() {

    useEffect( () =>{
      document.title = "MDB Nutrition"
    }, []);

  return (
    <div className="App">
   <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/categories" component={Categories}/>
      <Route exact path="/random" component={RandomMeal}/>

      </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
