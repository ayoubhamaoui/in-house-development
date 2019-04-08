import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import NavBar from './pages/NavBar';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <NavBar />
        <Switch>
          <Route path="/additem" component={AddItem}/>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/item/edit/:itemid' component={EditItem} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
