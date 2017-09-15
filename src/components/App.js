import React from 'react';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import '.././App.css';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function(){
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
