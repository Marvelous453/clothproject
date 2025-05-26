import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Notifications = [
  {
    id: '2',
    title: 'Special Offer',
    time: 'Yesterday 10:30 PM',
    bell: 'https://img.icons8.com/?size=100&id=32058&format=png&color=1A1A1A',
  },
  {
    id: '3',
    title: 'Special Offer',
    time: 'Yesterday 10:30 PM',
    bell: 'https://img.icons8.com/?size=100&id=32058&format=png&color=1A1A1A',
  },
  {
    id: '4',
    title: 'Special Offer',
    time: 'Yesterday 10:30 PM',
    bell: 'https://img.icons8.com/?size=100&id=32058&format=png&color=1A1A1A',
  },
];

const Notification = () => {
  const navigation=useNavigation();
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E9E9E9', padding: 12, borderRadius: 8, marginBottom: 10,}}>
      <Image source={{ uri: item.bell }} style={{ height: 20, width: 20, marginRight: 10}} />
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>{item.title}</Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: 'black'}}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,margin: 18}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=9438&format=png&color=1A1A1A' }}
          style={{ height: 30, width: 30}}/>
          </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center', flex: 1}}>Notifications</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black'}}>Last 30 Days</Text>
        <TouchableOpacity>
          <Text style={{  fontSize: 18, fontWeight: 'bold', color: 'red'}}>All Marks As Read</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'black', }}>Today</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#E9E9E9', padding: 12, borderRadius: 8, marginBottom: 10,}}>
        <Image source={{uri: 'https://img.icons8.com/?size=100&id=32058&format=png&color=1A1A1A'}}
        style={{ height: 20, width: 20}}/>
        <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black'}}>Special Offer</Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>Today 10:30PM</Text>
        </View>
    </View>
    </View>
  
      
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginTop: 20, color: 'black',}}>Yesterday</Text>
      <FlatList
        data={Notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin: 30, textAlign: 'center'}}>See More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});

export default Notification
