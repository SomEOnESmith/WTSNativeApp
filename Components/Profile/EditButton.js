import React from "react";
import { Icon, Button, Text, View } from "native-base";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";

const EditButton = props => {
    console.log("TCL: props.profile", props.profile)
  return (
      <View>
{!props.profile ? <Button transparent>
        <Icon
          onPress={() => props.navigation.replace("Login")}
          name="account-edit"
          type="MaterialCommunityIcons"
          style= {{ color: "white" }}
        />
    </Button>:
    <Button transparent>
        <Icon
          onPress={() => props.navigation.navigate("EditProfile")}
          name="account-edit"
          type="MaterialCommunityIcons"
          style= {{ color: "white" }}
        />
    </Button>
}
      </View>
  );
};

const mapStateToProps = state => ({
//   cartItems: state.cartReducer.items
    profile: state.authReducer
});

export default withNavigation(connect(mapStateToProps)(EditButton));

/*On press ===== this.props.user ? "CoffeeCart" : "Login" */
