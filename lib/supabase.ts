import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Auth helper functions
export const signUp = async (email: string, password: string, username: string) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  // Create user profile after successful signup
  const { error: profileError } = await supabase
    .from('users')
    .insert([
      {
        id: authData.user.id,
        username,
        created_at: new Date().toISOString(),
      },
    ]);

  if (profileError) throw profileError;

  return authData;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Profile functions
export const updateProfile = async (userId: string, updates: {
  username?: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
}) => {
  const { error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId);

  if (error) throw error;
};

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

// Social connection functions
export const sendFriendRequest = async (userId: string, friendId: string) => {
  const { error } = await supabase
    .from('social_connections')
    .insert([
      {
        user_id: userId,
        friend_id: friendId,
        status: 'pending',
      },
    ]);

  if (error) throw error;
};

export const acceptFriendRequest = async (connectionId: string) => {
  const { error } = await supabase
    .from('social_connections')
    .update({ status: 'accepted' })
    .eq('id', connectionId);

  if (error) throw error;
};

export const getFriendsList = async (userId: string) => {
  const { data, error } = await supabase
    .from('social_connections')
    .select(`
      id,
      friend:friend_id (
        id,
        username,
        full_name,
        avatar_url
      )
    `)
    .eq('user_id', userId)
    .eq('status', 'accepted');

  if (error) throw error;
  return data;
};