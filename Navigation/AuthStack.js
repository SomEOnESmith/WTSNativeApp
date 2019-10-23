import { createStackNavigator } from "react-navigation-stack";
import ProfileStack from "./ProfileStack";
import Login from "../Components/Profile/LoginForm";
import Signup from "../Components/Profile/SignupForm";

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: "Login"
  }
);

export default AuthStack;
