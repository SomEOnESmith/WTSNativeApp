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
import { signup } from "../../redux/actions/authAction";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handleSubmitSignup = event => {
    this.props.signup(this.state, this.props.navigation);
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

            <Button warning onPress={this.handleSubmitSignup}>
              <Text>SignUp</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

SignUp.navigationOptions = {
  title: "Signup"
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, navigation) => dispatch(signup(userData, navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
