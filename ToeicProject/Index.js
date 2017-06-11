import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { TabbarA } from './primary_screen/Routers.js';

export default class Index extends React.Component {

  render() {
    console.log("Hello render index");
    return (
      <TabbarA />
    );
  }

  componentDidMount() {
    SplashScreen.hide();
  }

}
