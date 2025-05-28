import { useNavigation, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const data1 = ["All", "Men's", "Woman", "Children", "Adult", "Teen"];

const data2 = [
  {
    id: 1,
    productpic: 'https://img.freepik.com/premium-photo/unisex-tshirt-png-mockup-casual-fashion-transparent-design_53876-1017455.jpg',
    productname: 'T-shirt for men',
    amount: '$16',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 2,
    productpic: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448745.jpg',
    productname: 'Unisex T-shirt',
    amount: '$10',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 3,
    productpic: 'https://img.freepik.com/premium-psd/flat-lay-realistic-t-shirt-mockup_185216-241.jpg',
    productname: 'Designer for men',
    amount: '$18',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 4,
    productpic: 'https://img.freepik.com/free-vector/flat-minimalist-support-small-business-t-shirt_742173-10802.jpg',
    productname: 'T-Shirt for kids',
    amount: '$7',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 5,
    productpic: 'https://i.pinimg.com/736x/92/12/b9/9212b931cd022764aceece46977a11d8.jpg',
    productname: 'Quality-materials',
    amount: '$10',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 6,
    productpic: 'https://i.pinimg.com/736x/68/57/cf/6857cfe09ac733044062402556e84109.jpg',
    productname: 'Mens Coat',
    amount: '$60',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 7,
    productpic: 'https://i.pinimg.com/736x/8c/d0/44/8cd044647398816c5c5ccbb2e022ea12.jpg',
    productname: 'Baby Boy',
    amount: '$15',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
  {
    id: 8,
    productpic: 'https://i.pinimg.com/736x/5e/ee/bf/5eeebf32ef50418df6f389636ca06fa0.jpg',
    productname: 'Baby Girl dress',
    amount: '$8',
    staricon: 'https://img.icons8.com/?size=100&id=85389&format=png&color=FA5252',
    cart: 'https://img.icons8.com/?size=100&id=zhda2EVBCvHY&format=png&color=FFFFFF',
    heart: 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000',
  },
];

const Goods = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
        <View>
          <Text style={{ color: '#C24747', fontWeight: 'bold', fontSize: 25 }}> Welcome back!</Text>
          <Text style={{ fontSize: 15, fontWeight: '700', marginLeft: 25, marginBottom: 15 }}>Aleena shaheen</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=100&id=68376&format=png&color=000000',
            }} style={{ height: 35, width: 35 }}
          />
          <Text style={{ position: 'absolute', right: 5, fontSize: 13, color: 'white', backgroundColor: 'red', paddingHorizontal: 3, borderRadius: 10 }}>5</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 50, backgroundColor: '#efefef', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 15, alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("search")}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=59878&format=png&color=000000',
              }} style={{ height: 25, width: 25, marginHorizontal: 10, alignSelf: 'center', margin: 10 }} />
          </TouchableOpacity>
          <TextInput style={{ fontSize: 18 }} placeholder="Search" placeholderTextColor={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=100&id=ibE49TXcV3Gk&format=png&color=000000',
            }} style={{ height: 20, width: 20, marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: 200, backgroundColor: '#C24747', marginBottom: 20, flexDirection: 'row', paddingHorizontal: 25, borderRadius: 15, justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', lineHeight: 40, fontSize: 20, fontWeight: 'bold' }}>
            Shop with us! {'\n'}Get 50% off  {'\n'}on items
          </Text>
          <View style={{ height: 50, width: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F8FF', borderRadius: 13 }}>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}> Now</Text>
          </View>
        </View>
        <View style={{ height: 190, width: 130, alignSelf: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/images/pc.png')} style={{ height: 160, width: 160 }} />
        </View>
      </View>

    <View style={{ marginBottom: 20,}}>
  <FlatList
    data={data1}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 10 }}
    keyExtractor={(item) => item}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={{ backgroundColor: selectedCategory === item ? '#C24747' : '#efefef', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10,}}>
        <Text style={{ color: selectedCategory === item ? 'white' : 'black', fontWeight: '600', fontSize: 16 }}>{item}</Text>
      </TouchableOpacity>
    )}
  />
</View>
      <FlatList
        data={data2}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/product?id=${item.id}`)}
            style={{ marginBottom: 8, padding: 10, borderBottomWidth: 1, borderColor: '#ccc', marginHorizontal: 5, flex: 1 }}>
            <View>
              <Image source={{ uri: item.productpic }} style={{ height: 200, width: '100%' }} />
              <Image
                source={{ uri: item.heart }}
                style={{ height: 25, width: 25, position: 'absolute', top: 10, right: 10 }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', }}>{item.productname}</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Goods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
});
