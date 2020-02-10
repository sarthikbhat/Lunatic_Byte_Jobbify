import React from 'react'

import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Transition } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import HomeScreen from '../App/Home/HomeScreen'
import HistoryScreen from '../App/HistoryScreen/HistoryScreen'
import AllChats from '../App/Chat/AllChats'
import LogInScreen from '../Auth/Login/LoginScreen'
import AuthLoadingScreen from '../AuthLoading/AuthLoadingScreen'
import SignUpScreen from '../Auth/SignUp/SignUpScreen';



const FullStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      },
    },
    History: HistoryScreen,
    Chats: AllChats
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialCommunityIcons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'History') {
          IconComponent = MaterialCommunityIcons
          iconName = focused ? 'clock' : 'clock-outline';
        } else if (routeName === 'Chats') {
          IconComponent = MaterialCommunityIcons
          iconName = focused ? 'message-text' : 'message-text-outline';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AppStack = createStackNavigator(
  {
    Full: {
      screen: FullStack,
      navigationOptions: {
        title: 'Full',
        header: false
      },
    },
  }
);

const AuthStack = createStackNavigator(
  {
    LogIn:{
      screen:LogInScreen,
      navigationOptions: {
        title: 'Home',
        header: false
      },
    }, 
    SignUp:{
      screen:SignUpScreen,
      navigationOptions: {
        title: 'Home',
        header: false
      },
    }, 
  }
);

const App = createAnimatedSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  }
);

export default createAppContainer(App);