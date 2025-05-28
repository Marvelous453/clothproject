import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function RegisteLogrScreen() {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
     <View style={{ flexDirection:'row', paddingTop: 10}}>
      <TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000' }}
          style={{ height: 20, width: 20, backgroundColor: 'gray',padding: 13}}/>
          </TouchableOpacity>
          </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, color: 'black', marginBottom: 20}}>Login</Text>
      </View>

     
      <Text style={{  fontSize: 20, fontWeight: 'bold', color: 'black', paddingTop: 20 }}>Email</Text>
      <TouchableOpacity>
     <TextInput style={{ borderWidth: 2 ,borderColor: 'black', backgroundColor: 'gray', borderRadius: 10, padding: 12, marginTop: 7,}}
>shaheenaleena3@gmail.com</TextInput>
</TouchableOpacity>

      <Text style= {{  fontSize: 20, fontWeight: 'bold', color: 'black', paddingTop: 20 }}>Password</Text>
      <TouchableOpacity>
       <TextInput style={{ borderWidth: 2 ,borderColor: 'black', backgroundColor: 'gray', borderRadius: 10, padding: 12, marginTop: 7,}}
>******************</TextInput>
</TouchableOpacity>
 <TouchableOpacity  onPress={() => navigation.navigate("Bottom")}>
<View style={{  backgroundColor: 'red', padding: 15, borderRadius: 10, alignItems: 'center',marginTop: 30, }}>
        <Text style ={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}> Sing In</Text>
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