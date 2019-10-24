import React from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";

const CartButton = props => {
  let quantity = props.cartItems.length;
  return (
    <Button transparent>
      <Text style={{ color: "white", fontSize: 25 }}>
        {quantity === 0? "" :quantity}
        <Icon
          onPress={() => props.navigation.navigate("CartStack")}
          name="shoppingcart"
          type="AntDesign"
          style= {{ color:"white" }}
        />
      </Text>
    </Button>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
  //   user: state.authReducer.user
});

export default withNavigation(connect(mapStateToProps)(CartButton));

/*On press ===== this.props.user ? "CoffeeCart" : "Login" */
