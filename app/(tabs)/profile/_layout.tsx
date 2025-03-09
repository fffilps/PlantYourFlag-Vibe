import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: true,
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }} 
      />
      <Stack.Screen 
        name="edit" 
        options={{ 
          headerShown: true,
          title: 'Edit Profile',
          presentation: 'modal',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }} 
      />
    </Stack>
  );
}