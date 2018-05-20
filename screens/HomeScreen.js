import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { fetchCategoryRequest } from '../actions'
import Trivia from './Trivia';
import { bindActionCreators } from 'redux'

class HomeScreen extends Component {
  static navigationOptions = () =>{
    title: 'Home'
  }
  _bookPress = () => {
    const bookId = 10
    this.props.fetchCategoryRequest(bookId)
    this.props.navigation.navigate('Trivia')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Game</Text>
        <Button title="Books" onPress={this._bookPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  }
});

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCategoryRequest: fetchCategoryRequest
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeScreen); //creates a prop that refers to our state or in this case action creator 

