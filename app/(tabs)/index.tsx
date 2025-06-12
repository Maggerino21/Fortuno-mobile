import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NetWorthScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Greeting */}
        <Text style={styles.greeting}>
          {getGreeting()}, <Text style={styles.username}>Dexter</Text>
        </Text>

        {/* Net Worth Display */}
        <View style={styles.netWorthContainer}>
          <Text style={styles.netWorthValue}>$247,650</Text>
          <Text style={styles.changeText}>
            ↑ +$12,450 (5.3%) this month
          </Text>
        </View>

        {/* Chart Placeholder */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Growth Chart</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.placeholderText}>📈 Chart will go here</Text>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Assets</Text>
            <Text style={styles.statValue}>$285,400</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Liabilities</Text>
            <Text style={styles.statValue}>$37,750</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fffe',
  },
  content: {
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 32,
    textAlign: 'center',
  },
  username: {
    fontWeight: '700',
    color: '#059669',
  },
  netWorthContainer: {
    alignItems: 'center',
    marginBottom: 40,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  netWorthValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 8,
  },
  changeText: {
    fontSize: 18,
    color: '#22c55e',
    fontWeight: '600',
  },
  chartContainer: {
    marginBottom: 32,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});