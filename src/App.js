import logo from './logo.svg';
import './App.css';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
      </Router>

    </div>
  );
}

export default App;
