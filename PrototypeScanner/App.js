import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [ count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Clicked {count} times</Text>
      <Button 
        onPress={() => setCount(count + 1)}
        title="Generate QR code"
      />
      <Text>Clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Scan QR code"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
