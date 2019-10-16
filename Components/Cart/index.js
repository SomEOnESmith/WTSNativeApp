import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { View } from "native-base";
import { removeItem } from "../../redux/actions/cartActions";

const CartList = props => {
  const cart = props.cartItems.map(item => (
    <CartItem item={item} key={item.idx} removeItem={props.removeItem} />
  ));
  return <View>{cart}</View>;
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
});

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
