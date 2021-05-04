import ListCard from './components/ListCard';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/user/:id'>
            <UserDetails />
          </Route>
          <Route exact path='/users'>
            <ListCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
