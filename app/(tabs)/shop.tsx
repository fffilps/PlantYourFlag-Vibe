import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Card, Button, Image } from '@rneui/themed';

const products = [
  {
    id: '1',
    name: 'Premium Protein Powder',
    price: '$29.99',
    image: 'https://placehold.co/300x200',
    description: 'High-quality whey protein powder for muscle recovery',
  },
  {
    id: '2',
    name: 'Resistance Bands Set',
    price: '$19.99',
    image: 'https://placehold.co/300x200',
    description: 'Complete set of resistance bands for home workouts',
  },
  {
    id: '3',
    name: 'Gym Bag',
    price: '$39.99',
    image: 'https://placehold.co/300x200',
    description: 'Spacious gym bag with multiple compartments',
  },
];

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Button
              title="Add to Cart"
              containerStyle={styles.button}
              raised
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});