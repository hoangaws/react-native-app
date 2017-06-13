import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SplashScreen from 'react-native-splash-screen';
import {
    AdMobBanner,
} from 'react-native-admob';

export default React.createClass({
    render() {
        const { navigate } = this.props.navigation;
        return <ScrollableTabView initialPage={2} renderTabBar={() => <FacebookTabBar />}
            tabBarPosition="bottom" //locked={true}
        >
            <ScrollView tabLabel="ios-bonfire">
                <View>
                    <Text>Vocabulary </Text>

                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-bulb" color="red">
                <View>
                    <Text>Tips</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-eye">
                <View>
                    <ScrollView>
                        <List>
                            {users.map((user) => (
                                <ListItem
                                    key={user.login.username}

                                    avatar={{ uri: user.picture.thumbnail }}
                                    title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                                    subtitle={user.email}
                                    onPress={() => navigate('UserDetail_s', { ...user })}
                                />
                            ))}
                        </List>
                    </ScrollView>
                </View>

            </ScrollView>
            <ScrollView tabLabel="ios-headset">
                <View>
                    <ScrollView>
                        <List>
                            {users.map((user) => (
                                <ListItem
                                    key={user.login.username}

                                    avatar={{ uri: user.picture.thumbnail }}
                                    title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                                    subtitle={user.email}
                                    onPress={() => navigate('UserDetail_s', { ...user })}
                                />
                            ))}
                        </List>
                    </ScrollView>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-ribbon">
                <View>
                    <ScrollView>
                        <List>
                            <ListItem
                                key="SETTING"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Set1"
                                subtitle="aAasds"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="SETTING2"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Set2"
                                subtitle="aAasds"
                                onPress={() => navigate('Setting_s')}
                            />
                            <ListItem
                                key="SETTING3"

                                avatar={{ uri: "https://fashionthatpays.files.wordpress.com/2014/07/wolverine-x-man.jpg?w=463" }}
                                title="Set3"
                                subtitle="aAasds"
                                onPress={() => navigate('Setting_s')}
                            />

                        </List>
                        <Text>Hãy click vào QC để ủng hộ APP</Text>
                        <AdMobBanner
                            bannerSize="fullBanner"
                            adUnitID="ca-app-pub-7469861277535029/8882938994"
                            testDeviceID="EMULATOR"
                            didFailToReceiveAdWithError={(err) => { console.log("quang cao that bai" + err); }} />
                    </ScrollView>
                </View>
            </ScrollView>
        </ScrollableTabView>;
    },

    componentDidMount() {
        SplashScreen.hide();
    }
});