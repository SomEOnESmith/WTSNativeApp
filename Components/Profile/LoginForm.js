import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button
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
      <Container style={{ backgroundColor: "rgb(31,36,43)" }}>
        <Header style={{ backgroundColor: "rgb(31,36,43)" }} />
        <Content>
          <Form>
            <Item>
              <Input
                style={{ color: "white" }}
                name="username"
                value={username}
                placeholder="Username"
                autoCapitalize={false}
                onChangeText={username =>
                  this.handleChange({ username: username })
                }
              />
            </Item>
            <Item last>
              <Input
                style={{ color: "white" }}
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password =>
                  this.handleChange({ password: password })
                }
              />
            </Item>

            <Button
              warning
              style={{ color: "white" }}
              onPress={this.handleSubmitLogin}
            >
              <Text>Login</Text>
            </Button>

            <Button
              warning
              onPress={() => this.props.navigation.replace("Signup")}
            >
              <Text>Signup</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

LoginForm.navigationOptions = {
  title: "Login"
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, navigation) => dispatch(login(userData, navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
