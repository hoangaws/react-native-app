import { StackNavigator } from 'react-navigation';
import Welcome from './Welcome.js';
import UserDetail from '../area_screen/UserDetail.js';
import Setting from './Setting.js';

export const Routers = StackNavigator(
  {
    Welcome_s: { screen: Welcome },
    UserDetail_s: { screen: UserDetail },
    Setting_s: { screen: Setting },
  },
  {
    initialRouteName: 'Welcome_s',
  }
)