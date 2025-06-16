// app/(tabs)/index.tsx
import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Surface, Chip, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

export default function NetWorthScreen() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'God morgen';
    if (hour < 18) return 'God ettermiddag';
    return 'God kveld';
  };

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [98000, 102000, 118000, 125000, 128000, 132000],
        color: (opacity = 1) => `rgba(5, 150, 105, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(5, 150, 105, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#059669',
    },
    propsForBackgroundLines: {
      strokeDasharray: '3,3',
      stroke: '#e5e7eb',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Card */}
        <Card style={styles.headerCard}>
          <Card.Content style={styles.headerContent}>
            {/* Greeting */}
            <Text variant="headlineSmall" style={styles.greeting}>
              {getGreeting()}, <Text style={styles.name}>Dexter</Text>
            </Text>
            
            {/* Net Worth Display */}
            <View style={styles.netWorthContainer}>
              <Text variant="bodyMedium" style={styles.label}>
                Formue
              </Text>
              <Text style={styles.netWorthValue}>
                132 000
              </Text>
              <Chip 
                icon="trending-up" 
                mode="flat" 
                style={styles.changeChip}
                textStyle={styles.changeText}
              >
                +4 000 (3.1%) denne måneden
              </Chip>
            </View>
          </Card.Content>
        </Card>

        {/* Growth Chart */}
        <Card style={styles.chartCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Utvikling
            </Text>
            <View style={styles.chartContainer}>
              <LineChart
                data={chartData}
                width={width - 64}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                withDots={true}
                withShadow={false}
                withVerticalLines={false}
                withHorizontalLines={true}
                fromZero={false}
              />
            </View>
          </Card.Content>
        </Card>

        {/* Asset Overview */}
        <Card style={styles.overviewCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Oversikt
            </Text>
            
            <View style={styles.overviewRow}>
              <Surface style={[styles.overviewItem, styles.assetItem]}>
                <Text variant="labelMedium" style={styles.overviewLabel}>
                  Eiendeler
                </Text>
                <Text variant="headlineSmall" style={styles.assetValue}>
                  164 500
                </Text>
                <Text variant="bodySmall" style={styles.changeIndicator}>
                  +2.4% fra forrige måned
                </Text>
              </Surface>

              <Surface style={[styles.overviewItem, styles.liabilityItem]}>
                <Text variant="labelMedium" style={styles.overviewLabel}>
                  Gjeld
                </Text>
                <Text variant="headlineSmall" style={styles.liabilityValue}>
                  32 500
                </Text>
                <Text variant="bodySmall" style={styles.changeIndicator}>
                  -1.2% fra forrige måned
                </Text>
              </Surface>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Stats */}
        <Card style={styles.statsCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.sectionTitle}>
              Denne måneden
            </Text>
            
            <View style={styles.statsList}>
              <View style={styles.statItem}>
                <View style={styles.statLeft}>
                  <View style={[styles.statDot, { backgroundColor: '#22c55e' }]} />
                  <View>
                    <Text variant="bodyMedium" style={styles.statLabel}>
                      Spart denne måneden
                    </Text>
                    <Text variant="bodySmall" style={styles.statSubLabel}>
                      Automatisk sparing
                    </Text>
                  </View>
                </View>
                <Text variant="titleMedium" style={styles.statValue}>
                  8 500 kr
                </Text>
              </View>

              <Divider style={styles.statDivider} />

              <View style={styles.statItem}>
                <View style={styles.statLeft}>
                  <View style={[styles.statDot, { backgroundColor: '#059669' }]} />
                  <View>
                    <Text variant="bodyMedium" style={styles.statLabel}>
                      Beste investering
                    </Text>
                    <Text variant="bodySmall" style={styles.statSubLabel}>
                      Tesla aksjer
                    </Text>
                  </View>
                </View>
                <Text variant="titleMedium" style={[styles.statValue, { color: '#22c55e' }]}>
                  +12.3%
                </Text>
              </View>

              <Divider style={styles.statDivider} />

              <View style={styles.statItem}>
                <View style={styles.statLeft}>
                  <View style={[styles.statDot, { backgroundColor: '#0ea5e9' }]} />
                  <View>
                    <Text variant="bodyMedium" style={styles.statLabel}>
                      Månedsbudsjett
                    </Text>
                    <Text variant="bodySmall" style={styles.statSubLabel}>
                      73% brukt
                    </Text>
                  </View>
                </View>
                <Text variant="titleMedium" style={styles.statValue}>
                  22 100 kr
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Bottom spacing for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f4',
  },
  headerCard: {
    margin: 16,
    marginBottom: 12,
    backgroundColor: '#e8f5e8',
    borderRadius: 24,
    elevation: 0,
    borderWidth: 2,
    borderColor: '#d1fae5',
  },
  headerContent: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  greeting: {
    textAlign: 'center',
    color: '#1f2937',
    marginBottom: 32,
  },
  name: {
    color: '#059669',
    fontWeight: 'bold',
  },
  netWorthContainer: {
    alignItems: 'center',
  },
  label: {
    color: '#6b7280',
    marginBottom: 8,
    textAlign: 'center',
  },
  netWorthValue: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  changeChip: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },
  changeText: {
    color: '#22c55e',
    fontWeight: '600',
  },
  chartCard: {
    margin: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
  },
  sectionTitle: {
    color: '#1f2937',
    marginBottom: 16,
    fontWeight: '600',
  },
  chartContainer: {
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 16,
  },
  chart: {
    borderRadius: 16,
  },
  overviewCard: {
    margin: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
  },
  overviewRow: {
    flexDirection: 'row',
    gap: 12,
  },
  overviewItem: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  assetItem: {
    backgroundColor: 'rgba(5, 150, 105, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(5, 150, 105, 0.1)',
  },
  liabilityItem: {
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.1)',
  },
  overviewLabel: {
    color: '#6b7280',
    marginBottom: 8,
  },
  assetValue: {
    color: '#059669',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  liabilityValue: {
    color: '#ef4444',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  changeIndicator: {
    color: '#6b7280',
    textAlign: 'center',
  },
  statsCard: {
    margin: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 2,
  },
  statsList: {
    gap: 4,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  statLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 16,
  },
  statLabel: {
    color: '#1f2937',
    fontWeight: '500',
  },
  statSubLabel: {
    color: '#6b7280',
    marginTop: 2,
  },
  statValue: {
    color: '#1f2937',
    fontWeight: '600',
  },
  statDivider: {
    backgroundColor: '#f3f4f6',
  },
});