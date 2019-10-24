import React from "react";
import { View, Text } from "native-base";

import { connect } from "react-redux";

const Items = props => {
  const { cryptos } = props.cryptosReducer;
  const { crypt } = props;
  const retriveCrypto = cryptos.find(
    cryptoObj => crypt.currency === cryptoObj.id
  );

  return (
    <View>
      <Text>
        retriveCrypto = {retriveCrypto.currency} -- {retriveCrypto.rate_change}%
      </Text>
      <Text>crypt = {crypt.quantity}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  cryptosReducer: state.cryptosReducer
});

export default connect(mapStateToProps)(Items);
