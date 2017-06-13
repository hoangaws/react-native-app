import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {Routers} from './primary_screen/Routers.js';

export default class ToeicProject extends Component {

  render() {
    console.log("Hello render ToeicProject");
    return (
      <Routers />
    );
  }

}

AppRegistry.registerComponent('ToeicProject', () => ToeicProject);
