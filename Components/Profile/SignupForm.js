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
import { signup } from "../redux/actions";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    // console.log("this is the object" + object);
    this.setState(keyValue);
  };

  handleSubmitSignup = event => {
    this.props.signup(this.state);
  };
  render() {
    const { username, password } = this.state;
    console.log(this.state);
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

            <Button onPress={this.handleSubmitSignup}>
              <Text>SignUp</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(signup(userData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignUp);
