import { useNavigation } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

const Logo = () => {
    const navigation= useNavigation();
 

  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
         <TouchableOpacity onPress={() => navigation.navigate("Screen")}>
     <View style= {{ paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}> 
    <Image source={{ uri: "https://img.freepik.com/free-vector/fashion-brand-logo-template_23-2148661990.jpg?t=st=1747036498~exp=1747040098~hmac=868fd4b7846889544d2d94ef9f080212bc1f523323e8c202540ec18ad17dc55a&w=740"}}
    style={{ height: 300, width: 400}}
    />
    </View>
   </TouchableOpacity>
    </View>
  );
};


export default Logo;