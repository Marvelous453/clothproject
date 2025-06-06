import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Opps() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=101171&format=png&color=1A1A1A'}}
      style={{height: 20, width: 20, marginLeft: 10}}/>
    </TouchableOpacity>
      <View style={{ alignItems:'center', justifyContent:'center', padding: 30, marginBottom: 8, marginTop: 10}}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=66766&format=png&color=FA5252'}}
        style={{ height: 100, width:100, alignSelf: 'center'}}/>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'black', marginBottom: 10}}>Opps!</Text>
        <Text style={{ fontSize: 15, fontWeight: '700', color: 'black', textAlign: 'center'}}>Lorem ipsum dolor sit amet</Text>
        <Text style={{ fontSize: 15, fontWeight: '700', color: 'black', marginLeft: 60}}>consectetur.Ac malesuada eu eleifend</Text>
        <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>   porta tincidunt lorem ac.Eget.</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#D9534F',  paddingVertical: 12, paddingHorizontal: 50, borderRadius: 20,marginTop: 30, }}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, fontWeight: '700'}}> Try Again</Text>
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    padding: 10,
    paddingTop: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  
});