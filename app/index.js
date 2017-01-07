import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()
const RouterWithRedux = connect()(Router);

import Home from './components/home';
import PageOne from './pageOne';
import PageTwo from './pageTwo';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          </Scene>
        </RouterWithRedux>
      </Provider>

    )
  }
}
