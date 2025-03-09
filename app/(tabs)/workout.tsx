import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button } from '@rneui/themed';

const workouts = [
  { id: '1', name: 'Chest Day', exercises: ['Bench Press', 'Push-ups', 'Flyes'] },
  { id: '2', name: 'Leg Day', exercises: ['Squats', 'Lunges', 'Leg Press'] },
  { id: '3', name: 'Back Day', exercises: ['Pull-ups', 'Rows', 'Deadlifts'] },
];

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Start New Workout"
        containerStyle={styles.newWorkoutButton}
        raised
      />

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider />
            {item.exercises.map((exercise, index) => (
              <Text key={index} style={styles.exercise}>{exercise}</Text>
            ))}
            <Button
              title="Start Workout"
              type="outline"
              containerStyle={styles.startButton}
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
    padding: 10,
  },
  newWorkoutButton: {
    marginVertical: 15,
  },
  exercise: {
    fontSize: 16,
    marginVertical: 5,
  },
  startButton: {
    marginTop: 10,
  },
});