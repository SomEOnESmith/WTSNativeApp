import { createStackNavigator } from "react-navigation-stack";

import Profile from "../Components/Profile/Profile";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
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

export default ProfileStack;
