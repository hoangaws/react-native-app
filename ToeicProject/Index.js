import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {SideMenu} from './components/Router.js';
import SplashScreen from 'react-native-splash-screen'

export default class Index extends React.Component{

  componentDidMount() {
        SplashScreen.hide();
  }

  render() {
    console.log("Hello render index");
    return (
        <SideMenu />
    );
  }

}
