import React, { Component } from 'react';
import { View } from 'react-native';
import { initializeApp, auth } from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import fireBaseConfig from './constants/firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentDidMount() {
    initializeApp(fireBaseConfig);
    auth().onAuthStateChanged(user => this.setState({ loggedIn: !!user }));
  }

  renderContent = () => {
    const { loggedIn } = this.state;
    switch (loggedIn) {
      case true:
        return (
          <CardSection>
            <Button text="Logout" onPress={() => auth().signOut()} />
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
