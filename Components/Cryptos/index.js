import React from "react";

import { connect } from "react-redux";
import { List, Content, Spinner } from "native-base";

import CryptosItem from "./CryptosItem";
import CartButton from "../CartButton";
// import {  } from "react-native";

const CryptosItemsList = props => {
  const { cryptos, loading } = props.cryptosReducer;
  if (loading) {
    return <Spinner />;
  }
  const cryptosItem = cryptos.map((cryptoItem,index) => (
    <CryptosItem cryptoItem={cryptoItem} key={index} />
  ));
  return (
    <Content>
      <List>{cryptosItem}</List>
    </Content>
  );
};

navigationOptions = {
  title: "hodl.",
  headerRight: <CartButton />
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(CryptosItemsList);
