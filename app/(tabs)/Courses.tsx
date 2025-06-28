import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Courses() {
  return (
    <View style={styles.container}>
      <Text>Courses Page</Text>
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
