import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

import { SideMenu, List, Tabs, Tab, Icon, ListItem, Rating, ButtonGroup, Badge, Button } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import Screen_A from './Screen_A.js';
import Screen_B from './Screen_B.js';
import Screen_C from './Screen_C.js';
import Screen_D from './Screen_D.js';
import RadarChartScreen from './RadarChartScreen.js';

class App extends Component {

    static navigationOptions = {
        title: 'Luyện thi TOEIC',
        headerTintColor: 'red',
        headerRight: <Icon name='settings' color='#517fa4'
            size={33} containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />,
    };

    constructor() {
        super()
        this.state = {
            selectedTab: 'manhinhA',
            hideTabBar: false,
        }
    }

    hideTabBar(value) {
        this.setState({
            hideTabBar: value
        });
    }

    changeTab(selectedTab) {
        console.log('selectedTab');
        this.setState({ selectedTab })
        // navigate('Test_Screens');
    }

    render() {
        const { selectedTab } = this.state;
        let tabBarStyle = {};
        let sceneStyle = {};
        if (this.state.hideTabBar) {
            tabBarStyle.height = 0;
            tabBarStyle.overflow = 'hidden';
            sceneStyle.paddingBottom = 0;
        }

        const { navigate } = this.props.navigation;
        const buttons = ['Listening', 'Reading'];
        const { selectedIndex } = this.state;

        const list = [
            {
                name: 'Amy Farha1',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson2',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Amy Farha3',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson4',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Amy Farha5',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson6',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Chris Jackson7',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
            {
                name: 'Amy Farha8',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President',
                icon: 'av-timer'
            },
            {
                name: 'Chris Jackson9',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman',
                icon: 'flight-takeoff'
            },
        ]

        return (
            <Tabs hidesTabTouch hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle} >
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhA'}
                    title={selectedTab === 'manhinhA' ? 'Đánh giá' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='create' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='create' size={30} />}
                    onPress={() => this.changeTab('manhinhA')}>

                    <RadarChartScreen />
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhB'}
                    title={selectedTab === 'manhinhB' ? 'Từ Vựng' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='device-hub' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='device-hub' size={30} />}
                    onPress={() => this.changeTab('manhinhB')}>
                    <View>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{ height: 20 }} />

                        <List containerStyle={{ marginTop: 20, borderTopWidth: 10, borderBottomWidth: 1, borderBottomColor: 'red' }}>
                            {
                                list.map((item, i) => (
                                    <ListItem
                                        roundAvatar
                                        key={i}
                                        title={item.name}
                                        badge={{ value: 3, badgeTextStyle: { color: 'orange' }, badgeContainerStyle: { marginTop: -20 } }}
                                        subtitle={
                                            <Rating type="heart"
                                                readonly
                                                fractions={5}
                                                startingValue={1.57}
                                                imageSize={25}
                                            />}
                                        avatar={{ uri: item.avatar_url }}
                                        onPress={() => navigate('Test_Screens')}
                                    />
                                ))
                            }
                        </List>
                    </View>
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhC'}
                    title={selectedTab === 'manhinhC' ? 'Ngữ Pháp' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='content-paste' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='content-paste' size={30} />}
                    onPress={() => this.changeTab('manhinhC')}>

                    <List containerStyle={{ marginTop: 20, borderTopWidth: 10, borderBottomWidth: 1, borderBottomColor: 'red' }}>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    roundAvatar
                                    key={i}
                                    title={item.name}
                                    badge={{ value: 3, badgeTextStyle: { color: 'orange' }, badgeContainerStyle: { marginTop: -20 } }}
                                    subtitle={
                                        <Rating type="heart"
                                            readonly
                                            fractions={5}
                                            startingValue={1.57}
                                            imageSize={25}
                                        />}
                                    avatar={{ uri: item.avatar_url }}
                                    onPress={() => navigate('Test_Screens')}
                                />
                            ))
                        }
                    </List>

                </Tab>

                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'manhinhD'}
                    title={selectedTab === 'manhinhD' ? 'Luyện tập' : null}
                    renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='headset' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='headset' size={30} />}
                    onPress={() => this.changeTab('manhinhD')}>

                    <View>
                        <ScrollView horizontal={true}>
                            <Button
                                icon={{ name: 'cached' }}
                                title='Reading' />
                            <Button
                                icon={{ name: 'cached' }}
                                title='Listening' />
                        </ScrollView>
                        <ScrollView>
                            <List>
                                {
                                    list.map((item, i) => (
                                        <ListItem
                                            roundAvatar
                                            key={i}
                                            title={item.name}
                                            badge={{ value: 3, badgeTextStyle: { color: 'orange' }, badgeContainerStyle: { marginTop: -20 } }}
                                            subtitle={
                                                <Rating type="heart"
                                                    readonly
                                                    fractions={5}
                                                    startingValue={1.57}
                                                    imageSize={25}
                                                />}
                                            avatar={{ uri: item.avatar_url }}
                                            onPress={() => navigate('Test_Screens')}
                                        />
                                    ))
                                }
                            </List>
                        </ScrollView>
                    </View>
                </Tab>
            </Tabs >
        )
    }

    componentDidMount() {
        SplashScreen.hide();
    }
}

export default App;