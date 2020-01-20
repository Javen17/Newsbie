import React from 'react';
import { StyleSheet, Text, View , Image , SafeAreaView, ScrollView , FlatList } from 'react-native';
import CardList from '../CardList'
import NavigationButton from './layout/NavigationButton'
import CustomHeader from '../layout/CustomHeader'
import { Header } from 'react-native-elements'

class HomeScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader navigation = {this.props.navigation}/>
        <CardList></CardList>
      </SafeAreaView>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 300 ,
    width: 300,
  }
});

export default HomeScreen
