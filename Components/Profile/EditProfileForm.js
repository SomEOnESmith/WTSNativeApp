import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Text,
  Button
} from "native-base";

import { connect } from "react-redux";
// Actions
import { login } from "../../redux/actions/authAction";
import { signup } from "../../redux/actions/authAction";
import { TextInput } from "react-native-gesture-handler";

class EditProfileForm extends Component {
  state = {
    email: "",
    phone_number: "",
    birth_date: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };
  handleSubmitEdit = event => {
    this.props.editProfile(this.state, this.props.navigation);
  };

  render() {
    const { email, phone_number, birth_date } = this.state;
    return (
      <Container style={{ backgroundColor: "rgb(31,36,43)" }}>
        <Header style={{ backgroundColor: "rgb(31,36,43)" }} />
        <Content>
          <Form>
            <Item>
              <TextInput
                style={{ color: "white", height: 40, flex: 1 }}
                name="email"
                value={email}
                placeholder="email"
                autoCapitalize={false}
                onChangeText={email => this.handleChange({ email })}
              />
            </Item>
            <Item>
              <TextInput
                style={{ color: "white", height: 40, flex: 1 }}
                value={phone_number}
                placeholder="phone_number"
                secureTextEntry
                name="phone_number"
                onChangeText={phone_number =>
                  this.handleChange({ phone_number })
                }
              />
            </Item>
            <Item last>
              <TextInput
                style={{ color: "white", height: 40, flex: 1 }}
                value={birth_date}
                placeholder="birth_date"
                secureTextEntry
                name="birth_date"
                onChangeText={birth_date => this.handleChange({ birth_date })}
              />
            </Item>
            <Button
              warning
              style={{ color: "white" }}
              onPress={this.handleSubmitEdit}
            >
              <Text>confirm</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

EditProfileForm.navigationOptions = {
  title: "Edit Profile"
};

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (userData, navigation) =>
      dispatch(editProfile(userData, navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(EditProfileForm);
