import React from "react";
import { View, Text } from "native-base";
import { connect } from "react-redux";

const Wallet = props => {
  const { cryptos } = props.cryptosReducer;
  const profileTransactions = props.transaction.transaction_items.map(crypt => {
    const retriveCrypto = cryptos.find(
      cryptoObj => crypt.currency === cryptoObj.id
    );
    return (
      <View>
        <Text style={{ color: "white", marginLeft: 16 }}>
          Transactions: {props.transaction.id}
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          {retriveCrypto.currency}
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          price: {retriveCrypto.price}
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          rate: {retriveCrypto.rate_change}%
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          quantity: {crypt.quantity}
        </Text>
        <Text style={{ color: "white", marginLeft: 16 }}>
          --------------------------------------------
        </Text>
      </View>
    );
  });

  return (
    <View>
      <Text style={{ color: "white", marginLeft: 16 }}></Text>
      <View>{profileTransactions}</View>
    </View>
  );
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(Wallet);
