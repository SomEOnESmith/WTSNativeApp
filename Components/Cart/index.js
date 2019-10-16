import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { View } from "native-base";

const CartList = props => {
  const cart = props.cartItems.map(item => (
    <CartItem item={item} key={item.id} />
  ));
  return <View>{cart}</View>;
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
});

export default connect(mapStateToProps)(CartList);
