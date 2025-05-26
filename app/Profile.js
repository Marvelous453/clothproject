import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const menuItems = [
  {
    id: '1',
    title: 'Order History',
    icon: 'https://img.icons8.com/?size=100&id=6904&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '2',
    title: 'Personal Details',
    icon: 'https://img.icons8.com/?size=100&id=99268&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '3',
    title: 'Address',
    icon: 'https://img.icons8.com/?size=100&id=3723&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '4',
    title: 'Payment Method',
    icon: 'https://img.icons8.com/?size=100&id=nSzSwvJmBvoV&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '5',
    title: 'About',
    icon: 'https://img.icons8.com/?size=100&id=77&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '6',
    title: 'Help',
    icon: 'https://img.icons8.com/?size=100&id=646&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
  {
    id: '7',
    title: 'Logout',
    icon: 'https://img.icons8.com/?size=100&id=BdksXmxLaK8r&format=png&color=FA5252',
    arrow: 'https://img.icons8.com/?size=100&id=95864&format=png&color=1A1A1A',
  },
];

const Profile = () => {
  const navigation=useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{   flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderBottomColor: '#eee',borderBottomWidth: 1,}}>
      <Image source={{ uri: item.icon }} style={{ width: 30, height: 30, marginRight: 15,}} />
      <Text style={{ fontSize: 20, fontWeight: '400', flex: 1,}}>{item.title}</Text>
      <Image source={{ uri: item.arrow }} style={{ height: 15, width:15}} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
       <Image source={{ uri: 'https://img.icons8.com/?size=100&id=4eI6oLXt9GRU&format=png&color=1A1A1A'}} 
        style={{height: 30, width: 30, marginTop: 30, marginLeft: 10 }}/>
        </TouchableOpacity>
      <View style={{ alignItems: 'center',marginBottom: 20,}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold',  color: 'black',}}>Profile</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/9a/52/be/9a52bed5dfea3002c34168897d4ddc9a.jpg',}}
          style={{height: 90, width: 90, borderRadius: 50, borderColor: 'red', borderWidth: 2}}
        />
        <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'black'}}>Aleena Shaheen</Text>
        <Text style={{ fontSize: 15, fontWeight: '400', color:'gray'}}>shaheenaleena@gmail.com</Text>
      </View>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Profile;