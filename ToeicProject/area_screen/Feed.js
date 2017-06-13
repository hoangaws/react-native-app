import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import {StackNavigator } from 'react-navigation';
import UserDetail from './UserDetail';

export default class Feed extends React.Component {

  render() {
  //  const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => navigate('UserDetail_s',{ ...user })}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

}

//  const App = StackNavigator(
//   {
//     UserDetail_s: { screen: UserDetail },
//   }
// );




