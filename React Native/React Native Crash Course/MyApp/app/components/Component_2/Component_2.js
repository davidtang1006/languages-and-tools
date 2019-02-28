/* ./app/components/Component_2/Component_2.js */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

export default class Component2 extends Component{
  onPress1(){
    console.log("Area 1 pressed.");
  }

  onPress2(){ // New
    console.log("Area 2 pressed.")
  }

  render(){
    return(
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello David.</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
          style={styles.v1}
          onPress={this.onPress1}
          underlayColor="grey">
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
          onPress={this.onPress2}
          style={styles.v2}>
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 10,
  }
});

AppRegistry.registerComponent('Component2', () => Component2);