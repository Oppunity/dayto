import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import {
  getLocationAsync,
  pickImageAsync,
  takePictureAsync,
} from './mediaUtils'

export default class AccessoryBar extends React.Component {
  render() {
    const { onSend, isTyping } = this.props

    return (
      <View style={styles.container}>
        <Button onPress={() => pickImageAsync(onSend)} name='photo' />
        <Button onPress={() => takePictureAsync(onSend)} name='camera' />
        <Button onPress={() => getLocationAsync(onSend)} name='my-location' />
        <Button
          onPress={() => {
            isTyping()
          }}
          name='chat'
        />
      </View>
    )
  }
}

const Button = ({
  onPress,
  size = 30,
  color = 'white',
  ...props
}) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialIcons size={size} color={color} {...props} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'black',
    
  },
})
