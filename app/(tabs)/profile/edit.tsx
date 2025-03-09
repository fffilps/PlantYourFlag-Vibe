import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { router } from 'expo-router';
import { updateProfile } from '@/lib/supabase';
import { supabase } from '@/lib/supabase';

export default function EditProfileScreen() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleSave = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error('No user found');

      await updateProfile(user.id, {
        full_name: fullName,
        bio,
        avatar_url: avatarUrl,
      });

      router.back();
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
        disabled={loading}
      />

      <Input
        label="Bio"
        value={bio}
        onChangeText={setBio}
        placeholder="Tell us about yourself"
        multiline
        numberOfLines={4}
        disabled={loading}
      />

      <Input
        label="Avatar URL"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
        placeholder="Enter avatar image URL"
        disabled={loading}
      />

      <Button
        title="Save Changes"
        onPress={handleSave}
        loading={loading}
        containerStyle={styles.button}
      />

      <Button
        title="Cancel"
        type="outline"
        onPress={() => router.back()}
        disabled={loading}
        containerStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 10,
  },
});