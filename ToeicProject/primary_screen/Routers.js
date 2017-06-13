import {StackNavigator} from'react-navigation';
import Welcome from './Welcome.js';
import UserDetail from '../area_screen/UserDetail.js';

export const Routers = StackNavigator({
  Welcome_s: { screen: Welcome },
  UserDetail_s: { screen: UserDetail },
}, {
  initialRouteName: 'Welcome_s',
})