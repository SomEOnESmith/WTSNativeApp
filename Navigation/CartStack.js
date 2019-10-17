import { createStackNavigator } from "react-navigation-stack";
import Cart from "../Components/Cart";
import Login from "../Components/Profile/LoginForm";
import Home from "../Components/Cryptos/index";
// import OrderHistory from "../Components/OrderHistory";

const CartStack = createStackNavigator(
  {
    Cart: Cart,
    Login: Login,
    home: Home
    // OrderHistory: OrderHistory
  },
  {
    initialRouteName: "Cart",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CartStack;
