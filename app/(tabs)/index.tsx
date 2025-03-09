import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      
      <Card>
        <Card.Title>Today's Workout</Card.Title>
        <Card.Divider />
        <Text>You have chest day scheduled</Text>
      </Card>

      <Card>
        <Card.Title>Friend Activity</Card.Title>
        <Card.Divider />
        <Text>John completed leg workout</Text>
        <Text>Sarah started cardio session</Text>
      </Card>

      <Card>
        <Card.Title>Weekly Progress</Card.Title>
        <Card.Divider />
        <Text>Workouts completed: 3/5</Text>
        <Text>Total time: 2h 45m</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});