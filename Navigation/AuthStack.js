import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/LoginForm";
import Signup from "../Components/SignupForm";
import Profile from "../Components/Profile";
import List from "../Components/Cryptos";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Profile: Profile,
    CryptosList: List
  },
  {
    initialRouteName: "Login",
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

export default AuthStack;
