import { createStackNavigator } from "react-navigation-stack";

import List from "../Components/Cryptos";

const CryptosStack = createStackNavigator(
  {
    CryptosList: List
  },
  {
    initialRouteName: "CryptosList",
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

export default CryptosStack;
