import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class CoffeeItem extends Component {
  render() {
    const { cryptoItem } = this.props;
    return (
      <View>
        <View style={styles.overlay} />
        <ListItem style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: cryptoItem.image }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{cryptoItem.name}</Text>
                <Text note style={styles.text}>
                  {cryptoItem.price}
                </Text>
                <Text note style={styles.text}>
                  {cryptoItem.rate_change}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </View>
    );
  }
}

export default withNavigation(CoffeeItem);
