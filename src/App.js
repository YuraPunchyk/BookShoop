import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import ChangeBookForm from './components/ChangeBookForm';


function App() {
  return (
    <Router>
       <nav class="navbar navbar-dark bg-dark">
       <Link class="btn btn-outline-success" Style='position:relative;left:30%;width:20%;'to='/'>Home</Link>
       <Link class="btn btn-outline-success" Style='position:relative;right:30%;width:20%;;' to='/books'>Books</Link>
       </nav>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/books' component={Books}/>
        <Route path='/change' component={ChangeBookForm}/>
        </Switch>
      </Router>
  );
}

export default App;
