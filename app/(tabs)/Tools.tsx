import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tools() {
  return (
    <View style={styles.container}>
      <Text>Tool Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
