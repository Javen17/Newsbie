import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Card } from 'react-native-elements'

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

export default CustomCard