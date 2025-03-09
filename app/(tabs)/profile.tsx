import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Text, Card, Button, ListItem } from '@rneui/themed';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          containerStyle={styles.avatar}
        />
        <Text h4>John Doe</Text>
        <Text style={styles.bio}>Fitness enthusiast | Weight training</Text>
      </View>

      <Card>
        <Card.Title>Stats</Card.Title>
        <Card.Divider />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>Days Streak</Text>
          </View>
        </View>
      </Card>

      <Card>
        <Card.Title>Recent Achievements</Card.Title>
        <Card.Divider />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>30 Day Streak</ListItem.Title>
            <ListItem.Subtitle>Completed workouts for 30 days straight</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>New PR</ListItem.Title>
            <ListItem.Subtitle>Set a new personal record in deadlift</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </Card>

      <Button
        title="Edit Profile"
        type="outline"
        containerStyle={styles.editButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    marginBottom: 15,
  },
  bio: {
    color: '#666',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
  editButton: {
    margin: 20,
  },
});