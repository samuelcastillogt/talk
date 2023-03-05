import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import DefinitionsContainer from '../components/DefinitionsContainer'
const Home = () => {
   
  return (
    <ScrollView>
    <View style={styles.container}>
      <Search />
      
    </View>
<DefinitionsContainer />
    </ScrollView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#963484"
    }
})