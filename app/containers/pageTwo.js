import React, { Component,PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { itemFetchData } from '../actions/items';
import { connect } from 'react-redux'

class PageTwo extends Component {

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {
    const {routes} = this.context;
    if (this.props.hasErrored) {
      return <Text>Sorry. error loading items</Text>
    }

    if (this.props.isLoading) {
      return <Text style={styles.container}>Loading...</Text>
    }

    return (
      <View style={styles.container}>
        {this.props.items.map((item, index) =>(
          <Text key={index}>
            {item.label}
          </Text>
        ))}
        <Text onPress={routes.pop}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 128,
    flex: 1,
  }
})
PageTwo.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo)
