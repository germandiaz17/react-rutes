import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import NavigatorBar from './NavigatorBar';
import Home from './components/Home'
import About from './components/About';
import FAQ from './components/FAQ';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <NavigatorBar />
        <hr />
        <Switch>
          <Route path='/' exact>
            Esta es la pagina de inicio
          </Route>

          <Route path='/Home'>
            <Home />
          </Route>

        <Route path='/About'>
          <About />
        </Route>

        <Route path='/FAQ'>
          <FAQ />
        </Route>

        <Route path='/Store'>
          <Store />
        </Route>

        <Route path='/App'>
          <Redirect to='/home' />
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
