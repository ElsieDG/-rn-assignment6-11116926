import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, Image, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "./Header";
import ProductCard from "./ProductCard";

export default function HomeScreen() {
  const [products, setProducts] = useState([
    { id: 1, image: require('../assets/dress1.png'), title: 'Office Wear', description: 'reversible angora cardigan', price: '120' },
    { id: 2, image: require('../assets/dress2.png'), title: 'Black', description: 'reversible angora cardigan', price: '120' },
    { id: 3, image: require('../assets/dress3.png'), title: 'Church Wear', description: 'reversible angora cardigan', price: '120' },
    { id: 4, image: require('../assets/dress4.png'), title: 'Lamerei', description: 'reversible angora cardigan', price: '120' },
    { id: 5, image: require('../assets/dress5.png'), title: '21WN', description: 'reversible angora cardigan', price: '120' },
    { id: 6, image: require('../assets/dress6.png'), title: 'Lopo', description: 'reversible angora cardigan', price: '120' },
    { id: 7, image: require('../assets/dress7.png'), title: '21WN', description: 'reversible angora cardigan', price: '120' },
    { id: 8, image: require('../assets/dress3.png'), title: 'lame', description: 'reversible angora cardigan', price: '120' },
  ]);

  const addToCart = async (product) => {
    try {
      // Check if item already exists in cart
      const cartItems = await AsyncStorage.getItem('cart');
      let cart = JSON.parse(cartItems) || [];

      const isItemInCart = cart.some(item => item.id === product.id);
      if (isItemInCart) {
        Alert.alert('Error', 'This product is already in your cart');
        return;
      }

      // Add item to cart
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      Alert.alert('Success', 'Product added to cart');
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <SafeAreaView style= {styles.container}> 
    <Header />
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.homeHeading}>
        <Text style={styles.heading}>O U R  S T O R Y</Text>
        <View style={styles.headingIcons}>
          <Image source={require('../assets/Listview.png')} style={styles.icon} />
          <Image source={require('../assets/Filter.png')} style={styles.icon} />
        </View>
      </View>

       <View style={styles.availableRow}>
          {products.map((product) => (
            <View key={product.id}>
              <ProductCard 
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => addToCart(product)}
              />
            </View>  
          ))}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },

  homeHeading:{
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
  },

  heading:{
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
  },

  headingIcons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  icon: {
    marginRight: 10, 
  },

  availableRow:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
})