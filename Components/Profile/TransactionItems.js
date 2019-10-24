import React from "react";
import { View, Text } from "native-base";

import { connect } from "react-redux";

const TransactionItems = props => {
  const { cryptos } = props.cryptosReducer;
  const { crypt } = props;
  const retriveCrypto = cryptos.find(
    cryptoObj => crypt.currency === cryptoObj.id
  );

  return (
    <View>
      <Text style={{ color: "white", marginLeft: 16 }}>
        retriveCrypto = {retriveCrypto.currency} -- {retriveCrypto.rate_change}%
      </Text>
      <Text style={{ color: "white", marginLeft: 16 }}>
        crypt = {crypt.quantity}
      </Text>
    </View>
  );
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(TransactionItems);
