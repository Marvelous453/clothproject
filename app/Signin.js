import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signin() {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row'}}>
    <Image source={{uri: 'https://img.icons8.com/?size=100&id=em64FLi9Djh8&format=png&color=000000'}}
    style={{ height:45, width: 30, opacity: 0.5, marginLeft: 10}}/>
     <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center',marginBottom: 40, marginLeft:5  }}>Register</Text>
    </View>
     

      <Text style={{ fontSize: 20, fontWeight: '600'}}>Full Name</Text>
      <TextInput style={{borderColor: 'black',backgroundColor: 'gray', borderRadius: 10, padding: 12, marginTop: 6, }} placeholder="Enter your Name" />

      <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 20}}>Email</Text>
      <TextInput style={{borderColor: 'black',backgroundColor: 'gray', borderRadius: 10, padding: 12, marginTop: 6, }} placeholder="Enter your email" keyboardType="email-address" />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Password</Text>
      <TextInput style={{ borderColor: 'black',backgroundColor: 'gray', borderRadius: 10, padding: 12, marginTop: 6, }} placeholder="Enter your password"/>

      <View style={{  flexDirection: 'row', alignItems: 'center', marginVertical: 20,}}>
        <View style={{ flex: 1,height: 1, backgroundColor: 'gray',}}/>
        <Text style={{ fontWeight:'bold', fontSize: 20,  marginHorizontal: 10,}}>OR</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray',}}/>
      </View>

    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 50, marginBottom: 50}}>
    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000'}}
    style={{ height: 40, width: 40}}
    />
    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000'}}
     style={{ height: 40, width: 40}}
    />
    </View>
      <TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
      <View style={{backgroundColor: 'red', padding: 10, borderRadius: 10, alignItems: 'center',}}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white',}}>Sign in</Text>
        </View>
        </TouchableOpacity>
      
<View style={{flexDirection:'row'}}>
      <Text style={{ color: 'black', textAlign: 'center', marginLeft: 10}}>  Doesn't I Have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisteLogrScreen")}>
      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}> Sign up</Text>
</TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
    backgroundColor: 'white',
    flex: 1,
  },

});