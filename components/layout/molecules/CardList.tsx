import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import CustomCard from '../atoms/CustomCard';
import BaseNetwork from '../../../network/BaseNetwork';

export default class CardList extends React.Component {

  baseNetwork: BaseNetwork;

  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource ,
      isLoading: true,
      page: 1,
      key: props.key
    }
    this.baseNetwork = props.baseNetwork;
  }

  componentDidMount() {
    return this.fetchData();
  }


  static getDerivedStateFromProps(props, state) {
    if (props.key !== state.key) {
      return {
        dataSource : props.dataSource
      };
    }
    return null;
  }

  async fetchData() {

    this.setState({
      isLoading: true,
    })

    console.log(this.state.page);

    this.baseNetwork.page = this.state.page;
    let data = await this.baseNetwork.buildFetch();

    this.setState({
      isLoading: false,
      dataSource: [...this.state.dataSource , ...data.articles],
      lastVisible: data.articles[data.articles.length - 1],
      page: this.state.page + 1,
    })


    /*let data = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0f7401ca2c194f07866f93c4911370a4' + '&page=' + this.state.page)
      .then((response) => response.json())
      .then((responseJson) => {


        this.setState({
          isLoading: false,
          dataSource: [...this.state.dataSource , ...responseJson.articles],
          lastVisible: responseJson.articles[responseJson.articles.length - 1],
          page: this.state.page + 1,
        })

        return responseJson.articles

      }).catch((error) => {
        console.error(error);
      });*/

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