import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Icon } from "native-base";

//stacks
import CryptosStack from "./CryptosStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";

const BottomNav = createBottomTabNavigator(
  {
    CryptosStack: CryptosStack,
    CartStack: CartStack,
    ProfileStack: ProfileStack
  },
  //initial route profile login
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "CryptosStack":
            iconName = "home";
            iconType = "Entypo";
            break;
          case "CartStack":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          case "ProfileStack":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;

          // default:
          //   iconName = "account";
          //   iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: "rgb(77, 92, 106)" }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "black",
      style: {
        backgroundColor: "rgb(25,29,33)"
      }
    }
  }
);

export default BottomNav;
