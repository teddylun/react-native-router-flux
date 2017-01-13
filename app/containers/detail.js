import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Detail extends Component {
  static contextTypes = {
    routes: PropTypes.object.isRequired,
  };
  render() {
    const {routes} = this.context;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Detail</Text>
        <Text onPress={routes.pop}>
          The params: {this.props.text}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#997F3D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
})

export default connect(({routes}) => ({routes}))(Detail)
