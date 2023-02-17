import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Habilities from './pages/Habilities';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/habilidades" component={ Habilities } />
    </Switch>
  );
}

export default App;
