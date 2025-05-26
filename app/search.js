import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const Search = () => {
  const recent = [
    { id: '1', name: 'Womens Dress' },
    { id: '2', name: 'Men T-Shirt\'s' },
    { id: '3', name: 'Womens Dress' },
    { id: '4', name: 'Men T-Shirt\'s' },
  ];

  const popular = [
    { id: 5, name: 'Womens Dress' },
    { id: 6, name: 'Men T-Shirt\'s' },
    { id: 7, name: 'Womens Dress' },
    { id: 8, name: 'Men T-Shirt\'s' },
    { id: 9, name: 'Womens Dress' },
    { id: 10, name: 'Men T-Shirt\'s' },
    { id: 11, name: 'WoMen Dress' },
    { id: 12, name: 'Men T-Shirt\'s' },

  ];
  const renderSearch = ({ item }) => (
    <TouchableOpacity style={{ backgroundColor: '#f0f0f0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 15, marginRight: 10, minWidth: '48%', alignItems: 'center', justifyContent: 'center',}}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black'}}>{item.name}</Text>
    </TouchableOpacity>
  );
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent:'space-between',  alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 10, marginBottom: 20, marginTop: 20}}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', gap: 10}}>
         <Image source={{uri: 'https://img.icons8.com/?size=100&id=59878&format=png&color=1A1A1A'}}
       style={{ height: 20, width: 20, marginLeft: 5, marginTop: 10}}/>
        <TextInput style={{ height: 44,color: 'black', fontSize: 15, fontWeight: '700',}}
          placeholder="Search" placeholderTextColor="#888" />
          </View>
        <TouchableOpacity>
           <Image source={{uri: 'https://img.icons8.com/?size=100&id=85836&format=png&color=1A1A1A'}}
       style={{ height: 20, width: 20, }}/>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 30}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black', marginBottom: 15}}>Recently Searches</Text>
        <FlatList
          data={recent}
          renderItem={renderSearch}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'center', marginBottom: 15}}
        />
      </View>

      <View style={styles.section}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginBottom: 10}}>Popular Searches</Text>
        <FlatList
          data={popular}
          renderItem={renderSearch}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'center', marginBottom: 15}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 10
    },
});

export default Search