
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Nav from './components/Nav';
import Resume from './components/pages/Resume';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Route exact path="/" component={About} /> */}
        <Route path="/projects" component={Projects} />
        <Route exact path="/" component={Resume} />
      </Router>

    </div>
  );
}

export default App;
