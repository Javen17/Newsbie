import React from 'react'
import {SearchBar} from 'react-native-elements'
import {SafeAreaView , StyleSheet , ToastAndroid} from 'react-native'
import BaseNetwork from '../../network/BaseNetwork'
import CardList from '../layout/molecules/CardList';

class SearchScreen extends React.Component {
  
  baseNetwork: BaseNetwork;

  constructor(props) {
    super(props); 
    this.baseNetwork = new BaseNetwork;
  }

  state = {
    search: '',
    dataSource : []
  };

  updateSearch = async search => {
    this.setState({ search });
    ToastAndroid.show( this.state.search , ToastAndroid.SHORT);
    this.baseNetwork.modifiers.q  = search;
    let results = await this.baseNetwork.buildFetch();
    this.setState({dataSource : [...results]});
  };


  render() {

    const { search } = this.state;


    return (
      /*<Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'Newsbie', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: "#0099FF",
          justifyContent: 'space-around',
        }}
      />*/
      <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle = {styles.searchBar}
        inputContainerStyle = {styles.inputContainer}
        lightTheme = {true}
      />
      <CardList baseNetwork = {this.baseNetwork} dataSource = {this.state.dataSource} key = {this.state.search}></CardList>
     </SafeAreaView>
     );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*justifyContent: 'center',*/
  },

  searchBar: {
    backgroundColor: "#0099FF",
    paddingTop: 35
  },

  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 25
  },

});


export default SearchScreen
