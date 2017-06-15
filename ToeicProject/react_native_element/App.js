import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { SideMenu, Tabs, Tab, Icon } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import Screen_A from './Screen_A.js';
import Screen_B from './Screen_B.js';
import Screen_C from './Screen_C.js';
import Screen_D from './Screen_D.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 'manhinhA',
        }
    }

    changeTab(selectedTab) {
        console.log('selectedTab');
        this.setState({ selectedTab })
        // navigate('Test_Screens');
    }

    render() {
        const { selectedTab } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <Tabs>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhA'}
                    title={selectedTab === 'manhinhA' ? 'Tiêu đề A' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='create' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='create' size={30} />}
                    onPress={() => this.changeTab('manhinhA')}>
                    <Screen_A />
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhB'}
                    title={selectedTab === 'manhinhB' ? 'Tiêu đề B' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='device-hub' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='device-hub' size={30} />}
                    onPress={() => this.changeTab('manhinhB')}>
                    <Screen_B />
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhC'}
                    title={selectedTab === 'manhinhC' ? 'Tiêu đề C' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='content-paste' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='content-paste' size={30} />}
                    onPress={() => navigate('C_Screens')}>
                    <Screen_C />
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhD'}
                    title={selectedTab === 'manhinhD' ? 'Tiêu đề D' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='headset' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='headset' size={30} />}
                    onPress={() => this.changeTab('manhinhD')}>
                    <Screen_D />
                </Tab>
            </Tabs>
        )
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}

export default App;