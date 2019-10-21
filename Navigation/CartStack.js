import { createStackNavigator } from "react-navigation-stack";
import Cart from "../Components/Cart";
import Login from "../Components/Profile/LoginForm";
import Home from "../Components/Cryptos/index";
import Signup from "../Components/Profile/SignupForm";
// import OrderHistory from "../Components/OrderHistory";

const CartStack = createStackNavigator(
  {
    Cart: Cart,
    Login: Login,
    Home: Home,
    Signup: Signup
    // OrderHistory: OrderHistory
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
