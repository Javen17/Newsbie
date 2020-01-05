import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Linking } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [] ,
      isLoading: true,
      page: 1,
    }
  }

  componentDidMount() {
    return this.fetchData(this.state.page)
  }

  async fetchData(page) {

    this.setState({
      isLoading: true,
    })

    let data = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0f7401ca2c194f07866f93c4911370a4' + '&page=' + this.state.page)
      .then((response) => response.json())
      .then((responseJson) => {


        this.setState({
          isLoading: false,
          dataSource: [...this.state.dataSource , ...responseJson.articles],
          lastVisible: responseJson.articles[responseJson.articles.length - 1],
          page: this.state.page + 1,
        })
      }).catch((error) => {
        console.error(error);
      });

    return data
  }


  onPressButton(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  renderFooter(isLoading) {
    try {
      // Check If Loading
      if (isLoading) {
        return (
          <ActivityIndicator />
        )
      }
      else {
        return null;
      }
    }
    catch (error) {
      console.log(error);
    }
  };


  render() {

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item , index }) => <CustomCard title={item.title} url={item.url} urlToImage={item.urlToImage} content={item.content} onPressButton={this.onPressButton} index = {index} />}
            keyExtractor={(item, index) => index}
            onEndReached={this.fetchData.bind(this)}
            ListFooterComponent={this.renderFooter(this.state.isLoading)}
            extraData = {this.state.dataSource}
          />
        }
      </View>
    );
  }
}


let CustomCard = (props) => {

  let card = (<Card key = {props.index} title={props.title} containerStyle={styles.container} titleStyle={styles.title} dividerStyle={styles.divider}>
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: props.urlToImage }}
      />
      <Text style={styles.subtitle}>{props.content}</Text>
    </View>
  </Card>)

  if (Platform.OS === 'android') {
    card = (<TouchableNativeFeedback onPress={() => { props.onPressButton(props.url) }}>
      {card}
    </TouchableNativeFeedback>)
  }
  else {
    <TouchableOpacity onPress={() => { props.onPressButton(props.url) }} activeOpacity={0.5}>
      {card}
    </TouchableOpacity>
  }


  return card
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    marginBottom: 5,
    marginTop: 0,
  },

  container: {
    borderRadius: 25,
    padding: 0
  },

  title: {
    padding: 10,
    marginBottom: 0,
    backgroundColor: "#0099FF",
    color: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25

  },

  divider: {
    marginBottom: 0,
  },


  subtitle: {
    padding: 15
  }


});
