import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

import { connect } from "react-redux";

const Profile = props => {
  const { user } = props;
  console.log("user", user);
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      {!user ? props.navigation.navigate("Login") : <></>}
      <Left>
        <Text style={{ color: "white", marginLeft: 16 }}>hi</Text>
        <Text note style={{ marginLeft: 16 }}>
          hello
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "white" }}>bye</Text>
      </Body>
    </ListItem>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer
});

export default connect(mapStateToProps)(Profile);
