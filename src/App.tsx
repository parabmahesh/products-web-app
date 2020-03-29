import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Products from './components/product/Products';
import './css/bootstrap.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  const menus = [{
    name: 'Home',
    action: '/',
  }, {
    name: 'About',
    action: '/about',
  }, {
    name: 'Contact us',
    action: '/contact',
  }];
  return (
    <Router>
      <div className="container-fluid">
        <Header menus={menus} />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
