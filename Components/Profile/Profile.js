import React, { Component } from "react";

// NativeBase Components
import { Text, Row, Grid, Container, View, Button } from "native-base";

import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import EditButton from "./EditButton";

class Profile extends Component {
  componentDidUpdate() {
    if (!this.props.profile) {
      this.props.navigation.navigate("Login");
    }
  }

  handleLogout = () => {
    this.props.logout();
    this.props.navigation.navigate("Login");
  };

  render() {
    const { profile } = this.props;
    if (!this.props.profile) {
      return this.props.navigation.navigate("Login");
    }
    return (
      <Grid style={{ borderBottomWidth: 0 }}>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Username: {profile.user.username}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Email: {profile.user.email}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Full Name: {profile.user.first_name} {profile.user.last_name}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Birthdate: {profile.birth_date}
          </Text>
        </Row>
        <Button onPress={() => this.handleLogout()}>
          <Text>logout</Text>
        </Button>
      </Grid>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <EditButton />
};
const mapStateToProps = state => ({
  profile: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
