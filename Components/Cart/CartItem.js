import React from "react";

import { connect } from "react-redux";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

const CartItem = props => {
  const { item, removeItem } = props;
  const { cryptos } = props.cryptosReducer;
  const retrivedCrypto = cryptos.find(
    cryptoObj => item.currency === cryptoObj.id
  );

  const total = retrivedCrypto.price * item.quantity;
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "white", marginLeft: 16, fontWeight: "700" }}>
          {retrivedCrypto.currency}
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          quantity = {item.quantity}
        </Text>
        <Text note style={{ marginLeft: 16 }}>
          Total = {total.toFixed(3)}
        </Text>
      </Left>
      <Right>
        <Button transparent onPress={() => removeItem(item)}>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(CartItem);
