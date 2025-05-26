import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Succeccfully() {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
     <View style={{ paddingTop: 50, marginBottom: 70, justifyContent: 'center', alignItems:'center'}}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=VLi4uZoMw53B&format=png&color=FA5252' }}
          style={{ height: 100, width: 100, }} />
      </View>
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'black', marginBottom : 30}}> Succeccfully Registered </Text>
   <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}> Congratulation Your account registered </Text>
   <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}> in this application </Text>
<TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
      <View style={{  backgroundColor: 'red', padding: 15, borderRadius: 10, alignItems: 'center',marginTop: 50, }}>
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