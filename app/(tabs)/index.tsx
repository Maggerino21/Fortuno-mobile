// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function NetWorthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <IconButton 
            icon="menu" 
            size={24} 
            iconColor="#000"
            style={styles.menuIcon}
          />
          <Text style={styles.label}>Label</Text>
          <View style={styles.profileIcon}>
            <IconButton 
              icon="account-circle" 
              size={32} 
              iconColor="#B8A8D9"
            />
          </View>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>
          God ettermiddag, <Text style={styles.name}>Dexter</Text>
        </Text>

        {/* Main Card */}
        <View style={styles.mainCard}>
          {/* Net Worth Section */}
          <View style={styles.netWorthSection}>
            <Text style={styles.formueLabel}>Formue</Text>
            <Text style={styles.netWorthValue}>534 000kr</Text>
          </View>

          {/* Colored Squares Grid */}
          <View style={styles.squaresGrid}>
            <View style={styles.squareRow}>
              <View style={[styles.square, { backgroundColor: '#4CAF50' }]} />
              <View style={[styles.square, { backgroundColor: '#E57373' }]} />
            </View>
            <View style={styles.squareRow}>
              <View style={[styles.square, { backgroundColor: '#4CAF50' }]} />
              <View style={[styles.square, { backgroundColor: '#AED581' }]} />
            </View>
          </View>

          {/* Page Indicators */}
          <View style={styles.pageIndicators}>
            <View style={[styles.dot, styles.inactiveDot]} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={[styles.dot, styles.inactiveDot]} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuIcon: {
    margin: 0,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8E2F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
    marginBottom: 32,
    paddingLeft: 4,
  },
  name: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    flex: 1,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  netWorthSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  formueLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
    marginBottom: 8,
  },
  netWorthValue: {
    fontSize: 48,
    fontWeight: '600',
    color: '#000',
    letterSpacing: -1,
  },
  squaresGrid: {
    alignItems: 'center',
    marginBottom: 60,
  },
  squareRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  square: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  pageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  inactiveDot: {
    backgroundColor: '#D0D0D0',
  },
  activeDot: {
    backgroundColor: '#000',
  },
});