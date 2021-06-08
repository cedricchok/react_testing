import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Blog from "./components/Blog";
import Home from "./components/Home";
import Images from "./components/Images";
import Menu from "./components/Menu";
import Parameters from "./components/Parameters";

function App() {
  return (
    <Router>
      <div>
        <nav className="container">
          <ul className="navbar">
            <li><Link to={'/'} className="link home"> Home </Link></li>
            <li><Link to={'/blog'} className="link blog">Blog</Link></li>
            <li><Link to={'/images'} className="link images">Images</Link></li>
            <li><Link to={'/menu'} className="link menu">Menu</Link></li>
            <li><Link to={'/parameters'} className="link parameters">Paramètres</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/images' component={Images} />
          <Route path='/menu' component={Menu} />
          <Route path='/parameters' component={Parameters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
