import React from 'react';
import { Platform, Image, Icon } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import LaunchScreen from '../screens/LaunchScreen';
import LoginScreen from '../screens/LoginScreen';
import GroupListScreen from '../screens/GroupListScreen';
import PerfilScreen from  '../screens/PerfilScreen';
import LiveGameScreen from '../screens/LiveGameScreen'
import StoryScreen from '../screens/StoryScreen'

const baseNavigationOption = () => ({
  headerTintColor: '#FFF',
  tintColor: '#FFF',
  gesturesEnabled: false,
  headerStyle: { 
    backgroundColor: Colors.baseColorGreen, 
    elevation: null
  }
});

const baseNavigationOptionsStack = (title) => ({
  title: title,
  headerTintColor: '#FFF',
  tintColor: '#FFF',
  gesturesEnabled: false,
  headerStyle: { 
    backgroundColor: Colors.baseColorGreen, 
    elevation: null
  }
});

export const GroupListStack = StackNavigator({
  LiveGame: {
    screen: LiveGameScreen,
    navigationOptions: baseNavigationOption
  },
  GroupList: {
    screen: GroupListScreen,
    navigationOptions: baseNavigationOption
  },

});


export const PerfilStack = StackNavigator({
  Perfil: {
    screen: PerfilScreen,
    navigationOptions: baseNavigationOption
  },
});


export const MainScreenStack = TabNavigator(
  {
    GroupList: {
      screen: GroupListStack,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    Perfil: {
      screen: PerfilStack,
      navigationOptions: {
        gesturesEnabled: false,
      },
    }
  },  {  
    tabBarOptions: { 
      showIcon: true 
    }, 
  });

export const RootStack = StackNavigator({
  Launch: {
    screen: LaunchScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Main: {
    screen: MainScreenStack,
  },
  Story: {
    screen: StoryScreen,
  },
}, {
  initialRouteName: 'Launch',
  mode: 'modal',
  headerMode: 'none',
});