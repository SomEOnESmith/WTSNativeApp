import { createStackNavigator } from "react-navigation-stack";

import List from "../Components/Cryptos/index";

const CryptosStack = createStackNavigator(
  {
    CryptosList: List
  },
  {
    initialRouteName: "CryptosList",
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

export default CryptosStack;
