import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [lastTapped, setLastTapped] = useState('nothing yet');

  return (
    <View style={styles.screen}>
      <Text style={styles.status}>Last tapped: {lastTapped}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 48, backgroundColor: '#fff' },
  status: { padding: 16, fontSize: 18, fontWeight: '600' },
});
