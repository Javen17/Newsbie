import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, TouchableHighlight, Linking } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0f7401ca2c194f07866f93c4911370a4')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        }, function() {

        });

      })
      .catch((error) => {
        console.error(error);
      });
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


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        {
          this.state.dataSource.map((u, i) => {
            return (
              <TouchableHighlight onPress={() => { this.onPressButton(u.url) }}>
                <Card title={u.title} key={i} containerStyle = {styles.container} titleStyle = {styles.title} dividerStyle = {styles.divider}>
                  <View>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.urlToImage }}
                    />
                    <Text style = {styles.subtitle}>{u.content}</Text>
                  </View>
                </Card>
              </TouchableHighlight>


            );
          })
        }



      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    height: 200,
    marginBottom: 5,
    marginTop: 0,
  },

  container: {
    borderRadius: 25 ,
    padding:0
  },

  title:{
    padding: 10,
    marginBottom:0,
    backgroundColor: "#0099FF",
    color: "white" ,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25

  },

  divider:{
    marginBottom:0,
  } ,


  subtitle:{
   padding:15
  }


});
