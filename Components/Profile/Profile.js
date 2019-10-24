import React, { Component } from "react";

// NativeBase Components
import { Text, Row, Grid, Container, View, Button } from "native-base";

import { connect } from "react-redux";
import EditButton from "./EditButton";
import Wallet from "./Wallet";
import LogoutButton from "./LogoutButton";

class Profile extends Component {
  componentDidUpdate() {
    if (!this.props.profile) {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    const { profile } = this.props;
    if (!this.props.profile) {
      return this.props.navigation.navigate("Login");
    }

    const transactions = profile.transactions.map((transaction, index) => (
      <Wallet transaction={transaction} key={index} />
    ));

    return (
      <Grid style={{ borderBottomWidth: 0 }}>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Username: {profile.user.username}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Full Name: {profile.user.first_name} {profile.user.last_name}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Email: {profile.user.email}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Phone number: {profile.phone_number}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>
            Birthdate: {profile.birth_date}
          </Text>
        </Row>
        <Row style={{ height: 30 }}>
          <Text style={{ color: "white", marginLeft: 16 }}>Transactions =</Text>
          <View>{transactions}</View>
        </Row>
      </Grid>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <EditButton />,
  headerLeft: <LogoutButton />
};
const mapStateToProps = state => ({
  profile: state.authReducer
});

export default connect(mapStateToProps)(Profile);
