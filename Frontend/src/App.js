
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ArselaForm from "./components/arsela.component";
import ProxymForm from "./components/proxym.component";
import VermegForm from "./components/vermeg.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Welcome from "./components/home.component";


import logo from "./logo.png";




class App extends Component {
  render() {
  return (
    <Router>
   <div className="container">
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.arsela.co/fr/" target="_blank">
              <img src={logo} width="100" height="30" alt="www.arsela.co/fr/" />
            </a>
        
            <Link to="/home" className="navbar-brand">MERN Arsela</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Total List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/arsela" className="nav-link">Arsela</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/proxym" className="nav-link">Proxym</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/vermeg" className="nav-link">Vermeg</Link>
                </li>
              </ul>
            </div>
          </nav>

     <Route path="/" exact component={TodosList} />
     <Route path="/edit/:id" component={EditTodo} />
     <Route path="/arsela" component={ArselaForm} />
     <Route path="/proxym" component={ProxymForm} />
     <Route path="/vermeg" component={VermegForm} />
     <Route path="/home" component={Welcome} />
    
     </div>
     
     </Router>
  );
}
}

export default App;
