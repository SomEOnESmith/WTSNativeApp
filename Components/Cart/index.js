import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { View, Button, Text } from "native-base";
import { removeItem, checkout } from "../../redux/actions/cartActions";

const CartList = props => {
  const cart = props.cartItems.map((item,index) => (
    <CartItem item={item} key={index} removeItem={props.removeItem} />
  ));
  return (
    <View>
      {cart}
      {!props.user ? (
        <Button warning onPress={() => props.navigation.navigate("Login")}>
          <Text>Login</Text>
        </Button>
      ) : (
        <Button onPress={() => props.checkout(props.cartItems)}>
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
  removeItem: item => dispatch(removeItem(item)),
  checkout: cartCryptosItem => dispatch(checkout(cartCryptosItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
