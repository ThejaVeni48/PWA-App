// App.js
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏠 Hello from PWA Home Page!</Text>
      <Text style={styles.subtext}>Running on: {Platform.OS.toUpperCase()}</Text>
      <Text style={styles.note}>You can install this app on your device 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    marginBottom: 8,
  },
  note: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
    textAlign: 'center',
  },
});
