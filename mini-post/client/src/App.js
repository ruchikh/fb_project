import React, { Component } from 'react';
import './App.scss';
import Articles from './components/Articles';
import Article from './components/Article';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
        	<Switch>
        		<Route exact path='/' component={Articles}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route path='/article/:id' exact component={Article}/>
            <Route path='/signup' exact component={SignUp}/>
        	</Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
