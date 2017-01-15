import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()
const RouterWithRedux = connect()(Router);

import Landing from './components/Landing/landing';
import ItemsList from './components/ItemsList/itemsList';
import Home from './components/Home/home';
import Search from './components/Search/search';
import Login from './components/Login/login';
import Detail from './components/Detail/detail';
import Form from './components/Form/form';
import CleanForm from './components/CleanForm/cleanForm';

const TabIcon = ({ selected, title}) => {
    return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="landing" component={Landing} title="Landing"/>
            <Scene key="login" direction="vertical" component={Login} title="Login" hideNavBar />
            <Scene key="itemsList" component={ItemsList} title="Items List"/>
            <Scene key="detail" component={Detail} title="Detail" hideTabBar hideNavBar/>
            <Scene key="form" component={Form} title="Redux Form"/>
            <Scene key="cleanForm" component={CleanForm} title="Clean Form" initial={true} hideNavBar/>
            <Scene
              key="rootTabBar"
              tabs={true}
              tabBarStyle={{backgroundColor: '#ffffff'}}>
              <Scene key="home" component={Home} title="Home" icon={TabIcon} hideNavBar/>
              <Scene key="search" component={Search} title="Search" icon={TabIcon} hideNavBar/>
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  tarBarStyle: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  }
})
