/* ./app/components/Component_3/Component_3.js */
import React, {Component} from 'react';
import {AppRegistry, Switch, Text, TextInput, View} from 'react-native';

export default class Component3 extends Component{
  constructor(){
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: false // New
    }
  }

  onChangeText(value){
    this.setState({
      textValue:value
    });
  }

  onSubmit(){
    console.log('Input submitted.')
  }

  onSwitchChange(value){
    this.setState({
      switchValue:value
    });
  }

  render(){
    return(
      <View>
        <TextInput
        placeholder="Enter text:"
        onChangeText={(value) => this.onChangeText(value)}
        onSubmitEditing={this.onSubmit}
        value={this.state.textValue}/>
        <Text>{this.state.textValue}</Text>
        <Switch
        value={this.state.switchValue}
        onValueChange={(value) => this.onSwitchChange(value)}/>
      </View>
    );
    // The switch is newly added
  }
}

AppRegistry.registerComponent('Component3', () => Component3);