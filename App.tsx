import React from 'react';
import { StyleSheet, Text, View , Image , SafeAreaView, ScrollView , FlatList } from 'react-native';
import { Header } from 'react-native-elements'
import CardList from './components/CardList'

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

    <Header
  statusBarProps={{ barStyle: 'light-content' }}
  centerComponent={{ text: 'Newsbie', style: { color: '#fff'} }}
  containerStyle={{
    backgroundColor: "#0099FF",
    justifyContent: 'space-around',
  }}
/>

     <ScrollView >
      <CardList></CardList>
      </ScrollView>
  </SafeAreaView>
  );
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
