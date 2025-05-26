import { useNavigation } from 'expo-router';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const favourites = [
  {
    id: '1',
    title: 'Men T-Shirt',
    price: '$342',
    imageUrl: 'https://i.pinimg.com/736x/7d/46/18/7d461808f381dca36dc271ca2494c9cd.jpg',
    heartIcon: 'https://img.icons8.com/?size=100&id=59805&format=png&color=FA5252',
    starIcon: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252',
    bagIcon: 'https://img.icons8.com/?size=100&id=vOrtzt9yBh1X&format=png&color=FA5252',
  },
  {
    id: '2',
    title: 'Women T-Shirt',
    price: '$234',
    imageUrl: 'https://i.pinimg.com/736x/0c/23/2c/0c232c91e472b906e4c9a3549af00870.jpg',
    heartIcon: 'https://img.icons8.com/?size=100&id=59805&format=png&color=FA5252',
    starIcon: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252',
    bagIcon: 'https://img.icons8.com/?size=100&id=vOrtzt9yBh1X&format=png&color=FA5252',
  },
  {
    id: '3',
    title: 'Men T-Shirt',
    price: '$342',
    imageUrl: 'https://i.pinimg.com/736x/6f/ad/52/6fad52f0ba2c5a1208079ddb9049c19a.jpg',
    heartIcon: 'https://img.icons8.com/?size=100&id=59805&format=png&color=FA5252',
    starIcon: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252',
    bagIcon: 'https://img.icons8.com/?size=100&id=vOrtzt9yBh1X&format=png&color=FA5252',
  },
  {
    id: '4',
    title: 'Women T-Shirt',
    price: '$342',
    imageUrl: 'https://i.pinimg.com/736x/0b/1c/bc/0b1cbcb45fcbb2bbfd783148646c8ba7.jpg',
    heartIcon: 'https://img.icons8.com/?size=100&id=59805&format=png&color=FA5252',
    starIcon: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252',
    bagIcon: 'https://img.icons8.com/?size=100&id=vOrtzt9yBh1X&format=png&color=FA5252',
  },
];

const Favourite = () => {
  const navigation= useNavigation ();
  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10, margin: 5, flex: 1, alignItems: 'center', margin: 30}}>
      <Image source={{ uri: item.imageUrl }} style={{height: 130, width: 120,  borderRadius: 5}} />
      <TouchableOpacity style={{   position: 'absolute', top: 10, right: 15}}>
        <Image source={{ uri: item.heartIcon }} style={{ height: 20, width: 20}} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',gap: 15}}>
      <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 14,}}>{item.title}</Text>
      <Text style={{ marginTop: 10,fontSize: 14, fontWeight: '500', color: 'red'}}>{item.price}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '60%',}}>
        <TouchableOpacity>
          <Image source={{ uri: item.starIcon }} style={{width: 24, height: 24, marginRight: 5}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: item.bagIcon }} style={{width: 24, height: 24, marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=101171&format=png&color=1A1A1A'}}
    style={{ height: 20, width: 20, marginLeft: 20}}/>
    </TouchableOpacity>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, flex: 1}}>My Favourite</Text>
      </View>
      <FlatList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20,}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
});

export default Favourite
