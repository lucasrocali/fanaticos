import React from 'react';
import { Platform, Image } from 'react-native';
import { Icon } from 'native-base'
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

const baseLogoNavigationOption = (title) => ({
  title: title,
  gesturesEnabled: false,
  headerTitle: (
    <Image source={require('../screens/assets/logo.png')} style = {{ width: 200, 
      height: 35, 
      resizeMode: "contain" }}/>
  ),
  headerStyle: {
    backgroundColor: Colors.baseColorGreen, 
    elevation: null,
  }
})

export const GroupListStack = StackNavigator({
  LiveGame: {
    screen: LiveGameScreen,
    navigationOptions: baseLogoNavigationOption('Live')
  },
  GroupList: {
    screen: GroupListScreen,
    navigationOptions: baseLogoNavigationOption('Live')
  },

});


export const PerfilStack = StackNavigator({
  Perfil: {
    screen: PerfilScreen,
    navigationOptions: baseLogoNavigationOption('Perfil')
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
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName = 'search';
        switch (routeName) {
          case 'GroupList':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'SpotList':
            iconName = Platform.OS === 'ios'
              ? `ios-list${focused ? '' : '-outline'}`
              : 'md-list';
            break;
          case 'Elements':
            iconName = Platform.OS === 'ios'
              ? `ios-list-box${focused ? '' : '-outline'}`
              : 'md-list-box';
            break;
          case 'Perfil':
            iconName = Platform.OS === 'ios'
              ? `ios-contact${focused ? '' : '-outline'}`
              : 'md-contact';
        }
        return (
          <Icon
            name={iconName}
            size={28}
            style={{ marginBottom: -3 , color: focused ? Colors.baseColorGreen : Colors.tabIconDefault}}
          />
        );
      },
    }),  

    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    gesturesEnabled: false,
    tabBarOptions: { 
      showIcon: true ,
      style: {
        backgroundColor: Colors.white,
      },
      activeTintColor: Colors.darkGreen,
      inactiveTintColor: Colors.tabIconDefault
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