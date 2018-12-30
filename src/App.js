import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { fireBaseConfig } from './config';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
      </View>
    );
  }
}

export default App;
