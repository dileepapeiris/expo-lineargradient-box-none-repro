import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

const ROWS = Array.from({ length: 30 }, (_, index) => `Row ${index + 1}`);
const COLORS = ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)'] as const;

export default function App() {
  const [lastTapped, setLastTapped] = useState('nothing yet');
  const [workaround, setWorkaround] = useState(false);

  const button = (
    <Pressable style={styles.button} onPress={() => setLastTapped('Footer button')}>
      <Text style={styles.buttonText}>Footer button</Text>
    </Pressable>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.status}>Last tapped: {lastTapped}</Text>
      <View style={styles.toggle}>
        <Text style={styles.toggleLabel}>
          {workaround ? 'Workaround: gradient as a sibling' : 'Bug: gradient with box-none'}
        </Text>
        <Switch value={workaround} onValueChange={setWorkaround} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {ROWS.map((row) => (
          <Pressable key={row} style={styles.row} onPress={() => setLastTapped(row)}>
            <Text>{row}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {workaround ? (
        // Workaround: the gradient is a sibling with pointerEvents="none" inside a box-none View
        <View pointerEvents="box-none" style={styles.footer}>
          <LinearGradient colors={COLORS} pointerEvents="none" style={StyleSheet.absoluteFill} />
          {button}
        </View>
      ) : (
        // box-none: the gradient itself should let taps through to the rows behind it
        <LinearGradient colors={COLORS} pointerEvents="box-none" style={styles.footer}>
          {button}
        </LinearGradient>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 48, backgroundColor: '#fff' },
  status: { padding: 16, fontSize: 18, fontWeight: '600' },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  toggleLabel: { fontSize: 14, color: '#444' },
  list: { paddingBottom: 240 },
  row: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    paddingTop: 160,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  button: { padding: 16, borderRadius: 8, alignItems: 'center', backgroundColor: '#222' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
