import React, { Component } from 'react';
import {
  Button, Card, CardSection, Input,
} from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }

  render() {
    const { email, password } = this.state;

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
        <CardSection>
          <Button onPress={() => console.log('hi')} text="Login/Register" />
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
