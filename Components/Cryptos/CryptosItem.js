import React, { Component } from "react";
import { withNavigation } from "react-navigation";

import { connect } from "react-redux";

// Components
import { View } from "react-native";
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Row
} from "native-base";

// Style
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { addToCart } from "../../redux/actions/cartActions";

class CryptoItem extends Component {
  state = {
    currency: this.props.cryptoItem.id,
    quantity: ""
  };
  render() {
    const { cryptoItem } = this.props;
    return (
      <View>
        <View />
        <ListItem>
          <Card style={{ flex: 1 }}>
            <Row>
              <CardItem>
                <Thumbnail bordered source={{ uri: cryptoItem.image }} />
                <Text>{cryptoItem.currency}</Text>
              </CardItem>
              <CardItem>
                <Text>{cryptoItem.price} KWD</Text>
              </CardItem>
              <CardItem>
                <Text note>{cryptoItem.rate_change} %</Text>
              </CardItem>
            </Row>
            <Row>
              <TextInput
                style={{ height: 40, flex: 1 }}
                placeholder="quantity"
                onChangeText={quantity => this.setState({ quantity })}
                value={this.state.quantity}
              />
            </Row>
            <Row>
              <Button
                style={{ flex: 1 }}
                warning
                onPress={() => this.props.addToCart(this.state)}
              >
                <Text>Add To Cart</Text>
              </Button>
            </Row>
          </Card>
        </ListItem>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(CryptoItem)
);
