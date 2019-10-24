import { createStackNavigator } from "react-navigation-stack";

import Cart from "../Components/Cart";
import AuthStack from "./AuthStack";

const CartStack = createStackNavigator(
  {
    Cart: Cart,
    Auth: AuthStack
  },
  {
    initialRouteName: "Cart",
    cardStyle: {
      backgroundColor: "rgb(31,36,43)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(26,29,33)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CartStack;
