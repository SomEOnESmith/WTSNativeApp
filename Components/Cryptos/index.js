import React from "react";

import { connect } from "react-redux";
import { List, Content, Spinner } from "native-base";

import CryptosItem from "./CryptosItem";

const ItemsList = props => {
  const { cryptos, loading } = props.cryptosReducer;

  if (loading) {
    return <Spinner />;
  }
  const cryptosItem = cryptos.map(cryptoItem => (
    <CryptosItem cryptoItem={cryptoItem} key={cryptoItem.id} />
  ));
  return (
    <Content>
      <List>{cryptosItem}</List>
    </Content>
  );
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(ItemsList);
