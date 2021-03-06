import { Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './components/shared/PageNotFound';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/user/:id' component={UserDetails} />

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
