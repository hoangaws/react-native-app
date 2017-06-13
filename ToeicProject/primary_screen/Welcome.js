import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
} from 'react-native';

import FeedStack from '../area_screen/Feed';
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default React.createClass({
    render() {
        return <ScrollableTabView 
        style={
            { marginTop: 200, }} initialPage={1} renderTabBar={() => <FacebookTabBar />} 
            tabBarPosition="bottom" //locked={true}
        >
            <ScrollView tabLabel="ios-paper">
                <View>
                   <FeedStack />
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-people">
                <View>
                    <Text>dsdsds </Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-chatboxes">
                <View>
                    <Text>Messenger</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-notifications">
                <View>
                    <Text>Notifications</Text>
                </View>
            </ScrollView>
            <ScrollView tabLabel="ios-list">
                <View>
                    <Text>Other nav</Text>
                </View>
            </ScrollView>
        </ScrollableTabView>;
    },
});