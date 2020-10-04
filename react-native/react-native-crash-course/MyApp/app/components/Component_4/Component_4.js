/* ./app/components/Component_4/Component_4.js */
import React, {Component} from 'react';
import {AppRegistry, ListView, StyleSheet, Text, View} from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Brad Traversy'},
  {name: 'Steve Smith'},
  {name: 'Janet Williams'}
]

export default class Coomponent4 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, highlightRow){
    // There are some extra parameters
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }

  render(){
    return(
      <View>
        <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3,
  },
  rowText: {
    flex: 1
  }
});

AppRegistry.registerComponent('Coomponent4', () => Coomponent4);