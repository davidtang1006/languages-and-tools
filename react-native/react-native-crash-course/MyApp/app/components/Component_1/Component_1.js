/* ./app/components/Component_1/Component_1.js */
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'David',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi there.'
  }

  render(){
    let name = this.state.showName ? this.state.name : '(No name)';
    return(
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);