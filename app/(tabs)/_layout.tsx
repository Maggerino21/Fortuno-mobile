import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#059669', // Our green color
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f8fffe',
          borderTopColor: '#059669',
        },
      }}>
      <Tabs.Screen
        name="distribution"
        options={{
          title: 'Distribution',
          tabBarIcon: () => '📊',
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Net Worth',
          tabBarIcon: () => '💰',
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: () => '📈',
        }}
      />
    </Tabs>
  );
}