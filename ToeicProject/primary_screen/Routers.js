import React, { Component } from 'react';
import { StackNavigator, TabNavigator,DrawerNavigator  } from 'react-navigation';
import {
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Practice from './Practice.js';
import Vocabulary from './Vocabulary.js';
import Tips from './Tips.js';
import Progress from './Progress.js';
import Setting from './Setting.js';

// cac man hinh chinh

export const PracticeStack = DrawerNavigator({
    Tips_Screen: {
        screen: Practice,
        contentOptions: {
            title: 'PracticeStack12',
            drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
        }
    },
});

export const VocabularyStack = DrawerNavigator({
    Tips_Screen: {
        screen: Vocabulary,
        contentOptions: {
            title: 'VocabularyStack',
            drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
        }
    },
});

export const TipsStack = DrawerNavigator({
    Tips_Screen: {
        screen: Tips,
        contentOptions: {
            title: 'Tips',
            drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
        }
    },
});

export const ProgressStack = DrawerNavigator({
    Progress_Screen: {
        screen: Progress,
        contentOptions: {
            title: 'Progress',
            drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
        }
    },
});

export const SettingStack = DrawerNavigator({
    Setting_Screen: {
        screen: Setting,
        contentOptions: {
            title: 'Setting',
            drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
        }
    },
});

export const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

// cau hinh tabbar o duoi
export const TabbarA = TabNavigator(
    {
        PracticeTab: {
            screen: PracticeStack,
        },

        VocabularyTab: {
            screen: VocabularyStack,
        },
        TipsTab: {
            screen: TipsStack,
        },
        ProgressTab: {
            screen: ProgressStack,
        },
        SettingTab: {
            screen: SettingStack,
        },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#d0d8c2'
            },
            inactiveTintColor: '#383430',
            activeTintColor: '#0080FF',
        }
    }
);

// cau hinh tabbar ben trai
// export const SideMenu = DrawerNavigator(
//   {
//     Tabbar:{
//       screen: TabbarA
//     },
//   },
//   {
//     drawerWidth: 300,
//     drawerPosition: 'left',
//     contentComponent: props => <Menu {...props} />
//   }
// );

