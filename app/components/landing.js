import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Landing extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    const {routes} = this.context;
    return (
      <View style={styles.outerContainer}>
        <Text>
          The current scene is titled {this.props.routes.scene.title}.
        </Text>
        <Text onPress={Actions.rootTabBar}>Go to Home page</Text>
        <Text onPress={Actions.login}>Open modal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1
  }
})



export default connect(state => ({
  routes: state.routes
}), null)(Landing);
