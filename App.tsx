import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const ROWS = Array.from({ length: 30 }, (_, index) => `Row ${index + 1}`);

export default function App() {
  const [lastTapped, setLastTapped] = useState('nothing yet');

  return (
    <View style={styles.screen}>
      <Text style={styles.status}>Last tapped: {lastTapped}</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {ROWS.map((row) => (
          <Pressable key={row} style={styles.row} onPress={() => setLastTapped(row)}>
            <Text>{row}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 48, backgroundColor: '#fff' },
  status: { padding: 16, fontSize: 18, fontWeight: '600' },
  list: { paddingBottom: 240 },
  row: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
});
