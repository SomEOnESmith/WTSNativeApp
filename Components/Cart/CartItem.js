import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

const CartItem = props => {
  const { item, removeItem } = props;
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "white", marginLeft: 16 }}>{item.currency}</Text>
        <Text note style={{ marginLeft: 16 }}>
          {item.price}
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "white" }}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => removeItem(item)}>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
