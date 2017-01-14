import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Search extends Component {

  render() {
    const {routes} = this.context;
    const goToDetail = () => Actions.detail({text: this.props.routes.scene.title});

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Search</Text>
        <Text onPress={goToDetail}>Go to Detail with {this.props.routes.scene.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffcb05',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
})

export default connect(({routes}) => ({routes}))(Search)
