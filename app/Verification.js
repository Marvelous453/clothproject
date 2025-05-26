import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Verification() {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
     <View style={{ flexDirection:'row', paddingTop: 30, marginBottom: 70}}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000' }}
          style={{ height: 30, width: 30, backgroundColor: 'gray'}} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, color: 'black'}}> OTP code Verification</Text>
      </View>
      <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold', color: 'black'}}> Code has been send to +111**********99</Text>
    <View style ={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>  
    <TextInput style={{ height: 45, width: 40, backgroundColor: 'gray', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}> </TextInput>
 <TextInput style={{ height: 45, width: 40, backgroundColor: 'gray', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 20 }}> </TextInput>
  <TextInput style={{ height: 45, width: 40, backgroundColor: 'gray', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 25 }}> </TextInput>
   <TextInput style={{ height:45, width: 40, backgroundColor: 'gray', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}> </TextInput>
   </View>
   <View style={{ flexDirection: 'row', justifyContent:'center' }}>
   <Text style={{ fontSize: 15,fontWeight: 'bold', marginTop: 30, color: 'black'}}> Resend code in</Text>
    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 30, color: 'red'}}>  55s</Text>
   </View>
   <TouchableOpacity onPress={() => navigation.navigate("Succeccfully")}>
      <View style={{  backgroundColor: 'red', padding: 15, borderRadius: 10, alignItems: 'center',marginTop: 30, }}>
        <Text style ={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}> Verify</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
    flex: 1,
  },
  

});