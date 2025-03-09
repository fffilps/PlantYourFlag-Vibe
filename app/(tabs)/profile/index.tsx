import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Avatar, Text, Card, Button, ListItem } from '@rneui/themed';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import { getProfile, signOut } from '@/lib/supabase';

interface UserProfile {
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

export default function ProfileScreen() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      const userProfile = await getProfile(user.id);
      setProfile(userProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProfile();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Avatar
          size="xlarge"
          rounded
          source={profile?.avatar_url ? { uri: profile.avatar_url } : { uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          containerStyle={styles.avatar}
        />
        <Text h4>{profile?.full_name || profile?.username}</Text>
        <Text style={styles.bio}>{profile?.bio || 'No bio yet'}</Text>
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
        onPress={() => router.push('/profile/edit')}
        containerStyle={styles.button}
      />

      <Button
        title="Sign Out"
        type="outline"
        onPress={handleSignOut}
        containerStyle={styles.button}
        buttonStyle={{ borderColor: '#ff0000' }}
        titleStyle={{ color: '#ff0000' }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    paddingHorizontal: 20,
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
  button: {
    margin: 20,
  },
});