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
          <Route exact path='/' component={Home} />

          <Route exact path='/user/:id' component={UserDetails} />
          <Route exact path='/users' component={ListCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
