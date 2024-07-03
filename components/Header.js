import React from "react";
import { View, Image,StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('CartScreen');
  };

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.header}>
      <View style={styles.a}><Image source={require('../assets/Menu.png')}></Image></View>
      <View style={styles.b}><Image source={require('../assets/Logo.png')}></Image></View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={handleHome}>
            <Image style={styles.iconsImage} source={require('../assets/home.png')}/>
        </TouchableOpacity>

        <Image style={styles.iconsImage} source={require('../assets/Search.png')}/>
        
        <TouchableOpacity onPress={handleSearchPress}>
          <Image style={styles.iconsImage} source={require('../assets/shoppingBag.png')}/>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 10,
    paddingBottom: 20,
    display: 'flex',
    width: '100%',
    // height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',

  },
  a:{
    flex: 1,
    // backgroundColor: 'purple',
  },

  b:{
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },

  headerIcons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'blue',
    
  },
  
  iconsImage:{
    marginLeft: 10,
  },

}
);