import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";
// Actions
import { login } from "../../redux/actions/authAction";
import { signup } from "../../redux/actions/authAction";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };
  handleSubmitLogin = event => {
    this.props.login(this.state, this.props.navigation);
  };

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username =>
                  this.handleChange({ username: username })
                }
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password =>
                  this.handleChange({ password: password })
                }
              />
            </Item>
            <Button onPress={this.handleSubmitLogin}>
              <Text>Login</Text>
            </Button>
            <Text onPress={() => this.props.navigation.push("SignupForm")}>
              Signup
            </Text>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (userData, navigation) => dispatch(login(userData, navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
