import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import {
  Button, Card, CardSection, Input,
} from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const { errorTextStyle } = styles;

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress = async () => {
    try {
      this.setState({ error: '' });
      const { email, password } = this.state;
      if (!email.trim() || !password.trim()) throw new Error('Both fields are mandatory!');

      const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch ({ code, message }) {
      switch (code) {
        case 'auth/invalid-email':
          return this.setState({ error: 'Email is not valid!' });
        case 'auth/user-not-found':
          return this.setState({ error: 'Email does not exists!' });
        case 'auth/wrong-password':
          return this.setState({ error: 'Invalid password!' });
        default:
          return this.setState({ error: message });
      }
    }
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={email}
            onChangeText={userText => this.setState({ email: userText })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="Secret Password"
            value={password}
            secureTextEntry
            onChangeText={userText => this.setState({ password: userText })}
          />
        </CardSection>
        <Text style={errorTextStyle}>{error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress} text="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
