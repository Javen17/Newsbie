import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CardList from '../layout/molecules/CardList'
import CustomHeader from '../layout/atoms/CustomHeader'
import BaseNetwork from '../../network/BaseNetwork';

class HomeScreen extends React.Component {

  baseNetwork : BaseNetwork

  constructor(props){
    super(props);
    this.baseNetwork = new BaseNetwork;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader navigation = {this.props.navigation}/>
        <CardList baseNetwork = {this.baseNetwork} dataSource = {[]} key = {1}></CardList>
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
