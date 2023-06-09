import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const WithoutCard = () => {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require("../assets/without.png")}
      />
      <Text style={styles.title}>Busca una palabra para iniciar a practicar</Text>
    </View>
  )
}

export default WithoutCard

const styles = StyleSheet.create({
    container:{
        height: 450,
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    tinyLogo:{
      width: 300,
      height: 300
    },
    title:{
      fontSize: 20,
      color: "white",
    fontWeight: "bold",
    textAlign: "center"      
    }
})