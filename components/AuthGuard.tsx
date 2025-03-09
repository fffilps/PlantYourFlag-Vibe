import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.replace('/(auth)/login');
    }
  }

  return children;
}