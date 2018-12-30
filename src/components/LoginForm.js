import React, { Component } from 'react';
import { auth } from 'firebase';
import { Text } from 'react-native';
import {
  Button, Card, CardSection, Input, Spinner,
} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  onLoginSuccess = () => {
    this.setState({
      loading: false, email: '', password: '', error: '',
    });
  }

  registerUser = async () => {
    try {
      const { email, password } = this.state;
      await auth().createUserWithEmailAndPassword(email, password);
      this.onLoginSuccess();
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  }

  onButtonPress = async () => {
    try {
      this.setState({ error: '', loading: true });
      const { email, password } = this.state;
      if (!email.trim() || !password.trim()) throw new Error('Both fields are mandatory!');

      await auth().signInWithEmailAndPassword(email, password);
      return this.onLoginSuccess();
    } catch ({ code, message }) {
      if (code === 'auth/user-not-found') return this.registerUser();

      let error = message;
      if (code === 'auth/invalid-email') {
        error = 'Email is not valid!';
      } else if (code === 'auth/wrong-password') {
        error = 'Invalid password!';
      }
      return this.setState({ loading: false, error });
    }
  }

  render() {
    const {
      email, password, error, loading,
    } = this.state;
    const errorTextStyle = {
      fontSize: 20, alignSelf: 'center', color: 'red',
    };

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
          {loading ? <Spinner /> : <Button onPress={this.onButtonPress} text="Login/Register" />}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
