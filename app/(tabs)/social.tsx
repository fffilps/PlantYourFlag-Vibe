import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Avatar, Button } from '@rneui/themed';

const socialFeed = [
  {
    id: '1',
    user: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    workout: 'Completed chest day workout',
    time: '2h ago',
  },
  {
    id: '2',
    user: 'Sarah Smith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    workout: 'New personal record on deadlifts: 225lbs',
    time: '4h ago',
  },
];

export default function SocialScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={socialFeed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.userInfo}>
              <Avatar
                rounded
                source={{ uri: item.avatar }}
                size="medium"
              />
              <View style={styles.userText}>
                <Text style={styles.userName}>{item.user}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
            <Card.Divider />
            <Text style={styles.workoutText}>{item.workout}</Text>
            <View style={styles.actionButtons}>
              <Button
                title="Like"
                type="clear"
                icon={{ name: 'thumb-up', type: 'material' }}
              />
              <Button
                title="Comment"
                type="clear"
                icon={{ name: 'comment', type: 'material' }}
              />
            </View>
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
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userText: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeText: {
    color: '#666',
  },
  workoutText: {
    fontSize: 16,
    marginVertical: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});