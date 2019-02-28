/* ./App.js */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
// Navigator is currently deprecated...
import Component5 from './app/components/Component_5/Component_5';
import Component6 from './app/components/Component_6/Component_6';

export default class MyApp extends Component{
  renderScene(route, navigator){
    switch(route.id){
      case 'component5':
        return(<Component5 navigator={navigator} title='component5'/>)
      case 'component6':
        return(<Component6 navigator={navigator} title='component6' user={route.user}/>)
    }
  }

  render(){
    return(
      <Navigator
      initialRoute={{id: 'component5'}}
      renderScene={this.renderScene}
      configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}/>
    );
    // We want to be able to tap on the item in component 5 and
    // open up the details page
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);