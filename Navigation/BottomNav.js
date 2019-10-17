import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Icon } from "native-base";

//stacks
import CryptosStack from "./CryptosStack";
// import AuthStack from "./AuthStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";

const BottomNav = createBottomTabNavigator(
  {
    CryptosStack: CryptosStack,
    CartStack: CartStack,
    ProfileStack: ProfileStack
    // Order: OrderStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          //   case "Auth":
          //     iconName = "account";
          //     iconType = "MaterialCommunityIcons";
          //     break;
          case "CryptosStack":
            iconName = "home";
            iconType = "Entypo";
            break;
          case "CartStack":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          case "ProfileStack":
            iconName = "profile";
            iconType = "MaterialCommunityIcons";
            break;

          //   default:
          //     iconName = "account";
          //     iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
