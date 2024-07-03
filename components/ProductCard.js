import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({image, title, description, price, onAddToCart}) => {
  return(
    <View style={styles.cardContainer}>
      <View>
        <Image style={styles.cardImage} source={image}/>
        <TouchableOpacity onPress={onAddToCart} style={styles.plusSign}>
          <Image source={require('../assets/add_circle.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.textDiv}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    marginBottom: 20,
  },

  cardImage:{
    width: 170,
    height: 230,
  },

  plusSign:{
    position: 'absolute',
    bottom: 8,
    right: 5,

  },

  textDiv:{
    marginTop: 10,
  },

  title:{
    fontFamily: 'TenorSans-Regular',
    fontSize: 16,
  },
  description:{
    fontFamily: 'TenorSans-Regular',
    fontSize: 12,
    color: '#7f7f7f',
  },
  price:{
    fontFamily: 'TenorSans-Regular',
    fontSize: 14,
    color: '#dd8560',
    paddingTop: 5,
  },

})



export default ProductCard;