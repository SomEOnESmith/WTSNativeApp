import React from "react";
import { Icon, Button, Text, View } from "native-base";
import { withNavigation } from "react-navigation";

import { logout } from "../../redux/actions/authAction";
import { connect } from "react-redux";

const LogoutButton = props => {
  const handleLogout = () => {
    props.logout();
    props.navigation.navigate("Login");
  };
  return (
    <View>
      {!props.profile ? (
        <Button transparent>
          <Icon
            onPress={() => props.navigation.navigate("Login")}
            name="logout"
            type="SimpleLineIcons"
            style={{ color: "white" }}
          />
        </Button>
      ) : (
        <Button transparent>
          <Icon
            onPress={() => handleLogout()}
            name="logout"
            type="SimpleLineIcons"
            style={{ color: "white" }}
          />
        </Button>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  profile: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogoutButton)
);
