import { useNavigation } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Homescreen = () => {
    const navigation= useNavigation();
  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/premium-photo/portrait-young-woman-sitting-against-black-background-astral-world_1048944-16300081.jpg?w=740' }}
      style={styles.background}
      resizeMode="cover"
    >
    
      <View>
        
        <Text style={{ color: 'red', fontWeight: 'bold',fontSize: 20,marginBottom: 10, }}>Lorem ipsum</Text>
       <View>
       <Text style={{ fontWeight: 'bold', fontSize: 20, color:'white', marginBottom:10}}>Lorem ipsum</Text>
       </View>

       <View>
        <Text style={{ fontWeight: 'bold', fontSize: 13, color:'white'}}>Lorem ipsum dolor sit amet consectetur. Amet est velit sed sit dui ultrices a.</Text>
       </View>

        <View style={{ flexDirection: 'row', marginTop: 10,}}>
          <View style={{ height: 30, width: 30, color: 'white', backgroundColor:'white', borderRadius: 20, marginLeft: 5}}/>
          <View style={{ height: 30, width: 30, color: 'white', backgroundColor:'red', borderRadius: 20, marginLeft: 10}}/>
          <View style={{ height: 30, width: 30, color: 'white', backgroundColor:'white', borderRadius: 20, marginLeft: 10}} />
           <TouchableOpacity onPress={() => navigation.navigate("Register")}>
             <View style={{ height: 30, width: 120, backgroundColor: 'red', borderRadius: 20,marginHorizontal: 50, }}> 
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'white', textAlign: 'center', margin:3}}> continue</Text> 
            
            </View>         
           </TouchableOpacity>
        </View>
      </View>
     
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    opacity:0.5,
    paddingBottom: 30
  },
});

export default Homescreen;