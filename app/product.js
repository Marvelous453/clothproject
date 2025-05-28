import { useLocalSearchParams, useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL'];

const data2 = [
  {
    id: 1,
    productpic: 'https://img.freepik.com/premium-photo/unisex-tshirt-png-mockup-casual-fashion-transparent-design_53876-1017455.jpg',
    productname: 'T-shirt for men',
    amount: '$16',
    description: 'High-quality cotton T-shirt for everyday wear.',
  },
  {
    id: 2,
    productpic: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448745.jpg',
    productname: 'Unisex T-shirt',
    amount: '$10',
    description: 'Comfortable unisex T-shirt for all occasions.',
  },
  {
    id: 3,
    productpic: 'https://img.freepik.com/premium-psd/flat-lay-realistic-t-shirt-mockup_185216-241.jpg',
    productname: 'Designer for men',
    amount: '$18',
    description: 'Stylish designer T-shirt for men.',
  },
  {
    id: 4,
    productpic: 'https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg',
    productname: 'T-Shirt for kids',
    amount: '$7',
    description: 'Cute and comfy T-shirt for children.',
  },
  {
    id: 5,
    productpic: 'https://i.pinimg.com/736x/92/12/b9/9212b931cd022764aceece46977a11d8.jpg',
    productname: 'Quality-materials',
    amount: '$10',
    description: 'Qaulity materials.',
  },
  {
    id: 6,
    productpic: 'https://i.pinimg.com/736x/68/57/cf/6857cfe09ac733044062402556e84109.jpg',
    productname: 'Mens Coat',
    amount: '$60',
    description: 'Good quality Coat for men.',
  },
  {
    id: 7,
    productpic: 'https://i.pinimg.com/736x/8c/d0/44/8cd044647398816c5c5ccbb2e022ea12.jpg',
    productname: 'Baby Boy',
    amount: '$15',
    description: 'Cute and good quality cloth for baby boy.',
  },
  {
    id: 8,
    productpic: 'https://i.pinimg.com/736x/5e/ee/bf/5eeebf32ef50418df6f389636ca06fa0.jpg',
    productname: 'Baby Girl Dress',
    amount: '$8',
    description: 'Cute Fashion cloth for baby girl.',
  },
];

const Product = () => {
  const navigation= useNavigation();
  const { id } = useLocalSearchParams();
  const product = data2.find((item) => item.id === parseInt(id));

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: product.productpic }} style={{ height: 300, width: '100%' }} />
       <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 5, left: 10, borderRadius: 25, backgroundColor: 'white', padding: 8 }}>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=79026&format=png&color=1A1A1A' }} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', borderRadius: 25, top: 10, right: 10, backgroundColor: 'white', padding: 8 }}>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=99981&format=png&color=FA5252' }} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'black' }}>{product.productname}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252' }} style={{ height: 20, width: 20 }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252' }} style={{ height: 20, width: 20 }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252' }} style={{ height: 20, width: 20 }} />
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=60003&format=png&color=FA5252' }} style={{ height: 20, width: 20 }} />
            <View style={{ position: 'absolute', top: 20 }}>
              <Text style={{ fontSize: 13, fontWeight: '400', color: 'black', marginLeft: 5 }}>2038 Reviews</Text>
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 18, fontWeight: '700', color: 'black', marginTop: 30 }}>Select your Size</Text>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <FlatList
            data={sizes}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 5, borderColor: '#ccc', marginRight: 10, backgroundColor: item === 'M' ? 'red' : 'white' }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ marginVertical: 10 }}
            showsHorizontalScrollIndicator={false}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#eee', padding: 10, borderRadius: 6 }}>
              <Text>-</Text>
              </TouchableOpacity>
            <TextInput style={{ fontSize: 15, color: 'black', margin: 10 }}>2</TextInput>
            <TouchableOpacity style={{ backgroundColor: '#eee', padding: 10, borderRadius: 6 }}>
              <Text>+</Text>
              </TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 15, color: 'black', marginLeft: 5, marginBottom: 8 }}>Description</Text>
        <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>{product.description}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{product.amount}</Text>
          <TouchableOpacity  onPress={() => navigation.navigate("cart")}>
          <View style={{ backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 60, borderRadius: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Shop Now</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
