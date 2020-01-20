import React from 'react'
import { Header } from 'react-native-elements'
import NavigationButton from './NavigationButton'

let CustomHeader = (props) => {

  console.log(props);

  return(
    <Header
      statusBarProps={{ barStyle: 'light-content' }}
      centerComponent={{ text: 'Newsbie', style: { color: '#fff' } }}
      rightComponent = {<NavigationButton navigation = {props.navigation} />}
      containerStyle={{
        backgroundColor: "#0099FF",
        justifyContent: 'space-around',
      }}
    />
  );
}

export default CustomHeader
