import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement authentication with Supabase
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Welcome Back!</Text>
      
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
        title="Login"
        onPress={handleLogin}
        containerStyle={styles.button}
      />

      <Button
        title="Need an account? Sign Up"
        type="clear"
        onPress={() => router.push('/signup')}
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