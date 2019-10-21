import { createStackNavigator } from "react-navigation-stack";

import Profile from "../Components/Profile/Profile";
import Login from "../Components/Profile/LoginForm";
import Signup from "../Components/Profile/SignupForm";

const ProfileStack = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
    Signup: Signup
  },
  {
    initialRouteName: "Profile",
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

export default ProfileStack;
