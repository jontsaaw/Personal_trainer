import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist'
import{ BrowserRouter, Switch, Route, Link} from "react-router-dom"
import AppBar from'@material-ui/core/AppBar';
import Toolbar from'@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Link to="/">Customers</Link>{' '}
      <Link to="/trainings">Trainings</Link>{' '}
      <Switch>
      <Route exact path="/" component={Customerlist}/>
      <Route path="/trainings" component={Traininglist}/>
      <Route path="*" render={() => <h1>Page not  found</h1>}/>
      </Switch>
    </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;