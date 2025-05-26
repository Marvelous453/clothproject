import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const cart = [
  {
    id: '1',
    title: 'Men T-Shirt',
    size: 'Medium',
    color: 'White',
    price: '$345',
    quantity: 2,
    image: 'https://i.pinimg.com/736x/a4/34/e6/a434e68c5fc69b1c051835d289efb8c3.jpg',
  },
  {
    id: '2',
    title: 'Women T-Shirt',
    size: 'Medium',
    color: 'Green',
    price: '$123',
    quantity: 2,
    image: 'https://i.pinimg.com/736x/24/38/b2/2438b2f9f71c997ae083c7b370eec633.jpg',
  },
  {
    id: '3',
    title: 'Women T-Shirt',
    size: 'Medium',
    color: 'Ash',
    price: '$324',
    quantity: 2,
    image: 'https://i.pinimg.com/736x/76/36/5c/76365ccb05c31589c7f9a4994213eece.jpg',
  },
  {
    id: '4', title: 'Men Suit',
    size: 'Medium',
    color: 'Black',
    price: '$100', 
    quantity: 3,
    image: 'https://i.pinimg.com/736x/f6/0b/a8/f60ba873a0d8826e09397affe1a2fa84.jpg',
  },
  {
    id: '5',
    title: 'Baby Girl Cloth',
    size: 'Medium',
    color: 'Pink',
    price: '$200',
    quantity: 2,
    image: 'https://i.pinimg.com/736x/0c/ea/2e/0cea2e68b51d209bdd12c8dad1ac71ad.jpg',
  },
  {
    id: '6',
    title: 'Jeans For Men',
    size: 'Medium', color: 'Blue', 
    price: '$300',
    quantity: 2,
    image: 'https://i.pinimg.com/736x/c0/79/63/c0796394f2fae0e0c33acd60c906d25d.jpg',
  },
  {
    id: '7',
    title: '3 pieces mini-bra', 
    size: 'Medium', color: 'Black, Ash, White',
    price: '$400',
    quantity: 1,
    image: 'https://i.pinimg.com/736x/ad/25/9e/ad259ec7d6524a2ddf372867bfd4ea9e.jpg',
  },
  {
    id: '8', 
    title: 'Baby boy-cloth', 
    size: 'Medium', color: 'White',
    price: '$150', 
    quantity: 2,
    image: 'https://i.pinimg.com/736x/ad/13/0e/ad130e5d50b5e0c6916e7ab57376bb86.jpg',
  },
];

const Cart = () => {
    const navigation= useNavigation();
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center'}}>
      <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 10,}} />
      <View style={{ flex: 1, margin: 5}}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#0A0A0A'}}>{item.title}</Text>
        <Text style={{ fontSize: 15, fontWeight: '600', color: 'black'}}>({item.size})</Text>
        <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 5,}}>{item.price}</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center',}}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=KPhFC2OwpbWV&format=png&color=000000' }} style={{ width: 24, height: 24, marginBottom: 5,}} />
        </TouchableOpacity>
        <Text style={{ fontSize: 13, fontWeight: '500', color: 'black'}}>Color({item.color})</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5,}}>
          <Text style={{ marginHorizontal: 5, fontSize: 16, color: 'red'}}>*</Text>
          <Text style={{ color: 'red', fontWeight: '700', fontSize: 15}}>{item.quantity}</Text>
          <Text style={{ marginHorizontal: 5, fontSize: 16, color: 'red'}}>+</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight:'bold', color: 'black', justifyContent: 'center', textAlign: 'center', paddingTop: 10}}>My Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ backgroundColor: 'white', padding: 10}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '700', color: 'black'}}>Sub Total</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>$1942</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,}}>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '700', color: 'black'}}>Shipping</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black' }}>$100</Text>
        </View>
        <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
        <Text style={{ fontSize: 16, fontWeight:'700', color: 'black'}}>Discount</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black'}}>$50</Text>
        </View>
        <View style ={{   flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomColor: 'gray',borderBottomWidth: 1, marginBottom: 5}}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginBottom: 5,}}>
        <Text style={{fontSize: 22, color: 'red', fontWeight: 'bold'}}>Total</Text>
        <Text style={{ fontSize: 22, color: 'red', fontWeight: 'bold'}}>$1892</Text>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate("address")}>
        <View style={{ backgroundColor: 'red', padding: 20,alignItems: 'center', borderRadius: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white'}}>Checkout</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Cart
