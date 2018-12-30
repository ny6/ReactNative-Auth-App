import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import fireBaseConfig from './constants/firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(fireBaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
