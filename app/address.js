import { useNavigation } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const addresses = [
  {
    id: '1',
    title: 'Home Address',
    number: '+923554799178',
    address: 'Aliabad Colony/Gilgit Baltistan',
    home: 'https://img.icons8.com/?size=100&id=EWk5U4e6vW5X&format=png&color=FA5252',
    editIcon: 'https://img.icons8.com/?size=100&id=88584&format=png&color=000000'
  },
  {
    id: '2',
    title: 'Office Address',
    number: '+923129813018',
    address: 'Dot Austere Near Vision College Danyore',
    home: 'https://img.icons8.com/?size=100&id=37601&format=png&color=FA5252',
    editIcon: 'https://img.icons8.com/?size=100&id=88584&format=png&color=000000'
  },
];

const paymentMethods = [
  {
    id: '1',
    icon: 'https://img.icons8.com/?size=100&id=13611&format=png&color=000000',
  },
  {
    id: '2',
    icon: 'https://img.icons8.com/?size=100&id=U3CEry3c9wW2&format=png&color=000000',
  },
  {
    id: '3',
    icon: 'https://img.icons8.com/?size=100&id=pFNd0FTuBU2Q&format=png&color=000000',
  },
];

const address = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://img.icons8.com/?size=100&id=101171&format=png&color=1A1A1A' }}
            style={{ height: 20, width: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center', flex: 1 }}>Address</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: '400', color: 'black', marginLeft: 20, marginBottom: 10, marginTop: 10 }}>Shopping Information</Text>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', borderRadius: 8, borderColor: 'gray', borderWidth: 0.2, padding: 12, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.home }} style={{ height: 40, width: 40, marginHorizontal: 10 }} />
              <View style={{ flex: 1, marginTop: 30 }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>{item.number}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>{item.address}</Text>
              </View>
              <TouchableOpacity>
                <Image source={{ uri: item.editIcon }} style={{ height: 20, width: 20, marginRight: 10 }} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Payment Method</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ justifyContent: 'space-around', marginVertical: 15 }}
        renderItem={({ item }) => (
          <Image source={{ uri: item.icon }} style={{ height: 40, width: 40, marginHorizontal: 10 }} />
        )}
      />

      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Amount</Text>
      <View style={{ backgroundColor: '#f2f2f2', borderRadius: 5, padding: 18, marginVertical: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>Order Amount</Text>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>$1000</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 }}>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>Delivery Charges</Text>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>$100</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 }}>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>Discount</Text>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>$50</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 }}>
          <Text style={{ fontSize: 17, color: 'red', fontWeight: '600' }}>Total Payment</Text>
          <Text style={{ fontSize: 17, color: 'red', fontWeight: '600' }}>$1050</Text>
        </View>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate("Thank")}>
      <View style={{ backgroundColor: 'red', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Payment</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default address

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
});