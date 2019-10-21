import React, { Component } from "react";

// NativeBase Components
import { Text, Row, Grid, Container, View } from "native-base";

import { connect } from "react-redux";

class Profile extends Component {
  componentDidUpdate() {
    if (!this.props.user) {
      this.props.navigation.navigate("Login");
    }
  }
  render() {
    const { user } = this.props;
    if (!user) return this.props.navigation.replace("Login");
    return (
      <Grid style={{ borderBottomWidth: 0 }}>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Username: {user.username}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Email: {user.email}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Full Name: {user.first_name} {user.last_name}
          </Text>
        </Row>
      </Grid>
    );
  }
}
Profile.navigationOptions = {
  title: "Profile"
};
const mapStateToProps = state => ({
  user: state.authReducer
});

export default connect(mapStateToProps)(Profile);
