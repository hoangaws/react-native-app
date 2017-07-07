import { StackNavigator } from 'react-navigation';
import Menu from './Menu.js';
import Test from './Test.js';
import App from './App.js';
import ScreenA from './Screen_A.js';
import ScreenB from './Screen_B.js';
import ScreenC from './Screen_C.js';
import ScreenD from './Screen_D.js';
// import RadarChartBasic from './Chart.js';


export const Routers = StackNavigator(
  {
    App_Screens: { screen: App },
    Menu_Screens: { screen: Menu },
    Test_Screens: { screen: Test },
    A_Screens: { screen: ScreenA },
    B_Screens: { screen: ScreenB },
    C_Screens: { screen: ScreenC },
    D_Screens: { screen: ScreenD },
    // Chart_Screens: {screen : RadarChartBasic}
  },
  {
    initialRouteName: 'App_Screens',
  }
)
