import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { router } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    // TODO: Implement signup with Supabase
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Create Account</Text>
      
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={{ fontFamily: 'Inter-Regular' }}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ fontFamily: 'Inter-Regular' }}
      />
      
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ fontFamily: 'Inter-Regular' }}
      />

      <Button
        title="Sign Up"
        onPress={handleSignup}
        containerStyle={styles.button}
      />

      <Button
        title="Already have an account? Login"
        type="clear"
        onPress={() => router.push('/login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Inter-Bold',
  },
  button: {
    marginVertical: 10,
  },
});