import React from 'react';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements'


let NavigationButton = (props) => {

  console.log(props);

  return(
  /*  <Button
         title = ""
         onPress={() => props.navigation.navigate('Search')}
         color={Platform.OS === 'ios' ? '#fff' : null}

       />*/
       <Icon name='search' type='material' color='#ffffff' iconStyle = {{transform: [{ rotate: '90deg'}] , marginRight: 10 , marginTop: 5}} onPress={() => props.navigation.navigate('Search')}/>
  );
}

export default NavigationButton
