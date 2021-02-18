import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path= "/" component= {Home}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
