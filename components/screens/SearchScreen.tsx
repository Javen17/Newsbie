import React from 'react'
import { Header, SearchBar} from 'react-native-elements'
import {SafeAreaView , StyleSheet} from 'react-native'

class SearchScreen extends React.Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
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
      />
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
    width: 100,
  }

});


export default SearchScreen
