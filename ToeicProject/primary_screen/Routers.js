import { StackNavigator } from 'react-navigation';
import Welcome from './Welcome.js';
import UserDetail from '../area_screen/UserDetail.js';
import Feed from '../area_screen/Feed';

export const Routers = StackNavigator(
  {
    Welcome_s: { screen: Welcome },
    Feed_s: { screen: Feed },
    UserDetail_s: { screen: UserDetail },
  }, 
  {
    initialRouteName: 'Welcome_s',
  }
)