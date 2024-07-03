import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, handleRemove} from "react-native";

const CheckoutItem = ({image, title, description, price, removeFromCart}) =>{
  return(
    <View style={styles.checkoutItemDiv}>
      <View>
        <Image style={styles.cardImage} source={image}/>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity onPress={removeFromCart}  style={styles.plusSign}>
          <Image source={require('../assets/remove.png')}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create  ({
  checkoutItemDiv:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  cardImage:{
    width: 110,
    height: 140,
  },

  textArea:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    marginLeft: 10,
  },

  title:{
    fontFamily: 'TenorSans-Regular',
    marginBottom: 5,
    fontSize: 13,
    letterSpacing: 2,
  },

  description:{
    fontFamily: 'TenorSans-Regular',
    marginBottom: 3,
    fontSize: 13,
  },
  price:{
    fontFamily: 'TenorSans-Regular',
    fontSize: 14,
    color: '#dd8560',
    paddingTop: 3,
  },

  plusSign:{
    position: 'absolute',
    bottom: 8,
    right: 20,

  },
});

export default CheckoutItem;