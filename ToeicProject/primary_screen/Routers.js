import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Practice from './Practice.js';
import Vocabulary from './Vocabulary.js';
import Tips from './Tips.js';
import Progress from './Progress.js';
import Setting from './Setting.js';

// cac man hinh chinh
export const PracticeStack = StackNavigator({
    Practice_Screen: {
        screen: Practice,
        navigationOptions: {
            title: 'Practice-tieude',
            headerTintColor: 'blue',
        }
    },
});

export const VocabularyStack = StackNavigator({
    Vocabulary_Screen: {
        screen: Vocabulary,
        navigationOptions: {
            title: 'Vocabulary'
        }
    },
});

export const TipsStack = StackNavigator({
    Tips_Screen: {
        screen: Tips,
        navigationOptions: {
            title: 'Tips'
        }
    },
});

export const ProgressStack = StackNavigator({
    Progress_Screen: {
        screen: Progress,
        navigationOptions: {
            title: 'Progress'
        }
    },
});

export const SettingStack = StackNavigator({
    Setting_Screen: {
        screen: Setting,
        navigationOptions: {
            title: 'Setting'
        }
    },
});

// cau hinh tabbar o duoi
export const TabbarA = TabNavigator(
    {
        PracticeTab: {
            screen: PracticeStack,
            navigationOptions: {
                tabBarLabel: 'Pract'
            }
        },

        VocabularyTab: {
            screen: VocabularyStack,
            navigationOptions: {
                // tabBarLabel: 'Vocabul',
                // title: 'Profile 01',
                tabBarIcon: () => (
                    
                        <Icon name="home" size={24} color="#900" />
                    
                ),
            }
        },
        TipsTab: {
            screen: TipsStack,
            navigationOptions: {
                tabBarLabel: 'Tips'
            }
        },
        ProgressTab: {
            screen: ProgressStack,
            navigationOptions: {
                tabBarLabel: 'Progress'
            }
        },
        SettingTab: {
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel: 'Setting'
            }
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

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});


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