import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, Button } from 'react-native';
import {Icon } from 'react-native-elements';

class UserDetail extends Component {

  static navigationOptions = {
    title: 'Test 123',
    headerTintColor: 'blue',
    headerRight: <Icon reverse name='ios-american-football' type='ionicon' color='#517fa4' />,
  };

  constructor(props) {
    super(props);
    this.state = { showText1: false,showText2: false };
  }

  _onPressButton1() {
    this.setState({
        showText1: !this.state.showText1,
        showText2: false,
      });
  }

  _onPressButton2() {
    this.setState({
      showText1:false,
        showText2: !this.state.showText2,
      });
  }

  render() {
    let display1 = this.state.showText1 ? 'Answer1' : '';
    let display2 = this.state.showText2 ? 'Answer2' : '';

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.questions}>

          <View style={styles.textQuestions}>
            <Text>Questions : 1</Text>
            <Text>ssdswwrwwwwwwssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwds
              dsdsdwwwwwwwwwcxdssssssssdddddddddd
              dsdssddddddddddddddc
              eeeeeeeeeeeeeeeessssssssssssssssseeee
              ttttttttttttttttttttttttttttt
              ttttttttttttttttttttttttttttttttxcx
              rewrefrgeryrtyrtyrtrytyrtyrtyryrt</Text>
          </View>

          <View style={styles.button}>
            <Button
              onPress={()=>{this._onPressButton1()}}
              title="This looks great!"
            />
            <Button
              onPress={()=>{this._onPressButton2()}}
              title="OK!"
              color="#841584"
            />
          </View>

          <View style={styles.textAnswer}>
            <Text>{display1}{display2}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    margin: 20,
  },
  questions: {
    flex: 1,
    justifyContent: 'center',
  },
  textQuestions: {

  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textAnswer: {

  },
})

export default UserDetail;
