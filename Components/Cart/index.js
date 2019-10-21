import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { View, Button, Text } from "native-base";
import { removeItem } from "../../redux/actions/cartActions";

const CartList = props => {
  const cart = props.cartItems.map(item => (
    <CartItem item={item} key={item.idx} removeItem={props.removeItem} />
  ));
  return (
    <View>
      {cart}
      {!props.user ? (
        <Button warning onPress={() => props.navigation.navigate("Login")}>
          <Text>Login</Text>
        </Button>
      ) : (
        <Button onPress={() => props.navigation.navigate("home")}>
          <Text>Checkout</Text>
        </Button>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items,
  user: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
