import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Button,
  List,
  Content
} from "native-base";

// Style
import styles from "./styles";

class CryptoItem extends Component {
  render() {
    const { cryptoItem } = this.props;
    return (
      <View>
        <View style={styles.overlay} />
        <Content>
          <List>
            <ListItem style={styles.listitem}>
              <Card style={styles.transparent}>
                <CardItem style={styles.transparent}>
                  <Left>
                    <Thumbnail source={{ uri: cryptoItem.logo_url }} />
                    <Text style={styles.text}>{cryptoItem.name}</Text>
                    <Text note>{cryptoItem.price}</Text>
                    <Text note style={styles.text}>
                      {cryptoItem.rate_change}
                    </Text>
                    <Button
                      style={{ flex: 1 }}
                      warning
                      onPress={() => this.props.addToCart(this.state)}
                    >
                      <Text>Add To Cart</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

export default withNavigation(CryptoItem);
