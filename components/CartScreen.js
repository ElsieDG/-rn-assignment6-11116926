import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, Alert } from "react-native";
import Header from "./Header";
import CheckoutItem from "./CheckoutItem";

function CartScreen(){
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('cart');
        if (cart) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (product) => {
    try {
      let updatedCart = cartItems.filter(item => item.id !== product.id);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      Alert.alert('Success', 'Product removed from cart');
    } catch (error) {
      console.error(error);
    }
  };

  return(
   <SafeAreaView style={styles.container}>
    <Header />
    <ScrollView >
      <View style={styles.headingDiv}>
        <Text style={styles.heading}>C H E C K O U T</Text>
        <Text style={styles.headingDesign}>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾ ◇ ‾‾‾‾‾‾‾‾‾‾‾‾‾‾</Text>
      </View>

      <View>
          {cartItems.map((item) => (
            <CheckoutItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              removeFromCart={() => removeFromCart(item)} // Pass removeFromCart function
            />
          ))}
        </View>
      
    </ScrollView>
    <TouchableOpacity style={styles.checkOutButton}>
      <Image style={styles.b} source={require('../assets/shoppingBag.png')}/>
      <Text style={{
        color:'#fff', 
        fontFamily: 'TenorSans-Regular', 
        padding: 3,}}>CHECKOUT</Text>
    </TouchableOpacity>
    
   </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    // backgroundColor: '#f8f9fa',
  },

  headingDiv:{
    marginTop: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },

  heading:{
    fontFamily: 'TenorSans-Regular',
    fontSize: 18,
  },

  headingDesign:{
    color:'#9f9f9f'
  },

  b:{
    tintColor: '#fff',
    width: 20,
    height: 20,
    marginRight: 10,
    paddingBottom:10,
  },

  checkOutButton:{
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: -30,
    right: -30,
    height: 60,
    paddingTop: 20,
    // paddingBottom: 30,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
  },
})

export default CartScreen;