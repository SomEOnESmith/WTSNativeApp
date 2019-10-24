import { createStackNavigator } from "react-navigation-stack";

import Profile from "../Components/Profile/Profile";
import EditProfileForm from "../Components/Profile/EditProfileForm";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    EditProfile: EditProfileForm
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
