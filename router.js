import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  TabNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Conta from './screens/Conta';
import Saldo from './screens/Saldo';
import Pagamento from './components/Pagamento';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      header: null,
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      header: null,
    }
  }
});

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile", 
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    },
    Conta: {
      screen: Conta,
      navigationOptions: {
        tabBarLabel: "Conta",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="lock" size={30} color={tintColor} />
        )
      }
    },
    Saldo: {
      screen: Saldo,
      navigationOptions: {
        tabBarLabel: "Saldo",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="bars" size={30} color={tintColor} />
        )
      }
    },
    Pagamento: {
      screen: Pagamento,
      navigationOptions: {
        tabBarLabel: "Pagamento",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="credit-card" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};