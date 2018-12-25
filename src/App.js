import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Header} from './components';
import {routes} from './config';

class App extends Component {
  render() {

    const routerRender = routes.map( (route,i) => <Route key={i} { ...route } /> );

    return <Provider store={ store }>
      <Router>
        <React.Fragment>

          <Header/>

          <main>
            <Switch>
              { routerRender }
            </Switch>
          </main>

          <Footer/>

        </React.Fragment>
      </Router>
    </Provider>;
  }
}

export default App;
