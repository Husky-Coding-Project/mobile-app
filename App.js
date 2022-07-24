import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// 1. Import 
import QRCode from 'react-native-qrcode-svg';

class App extends Component {
  // Simple usage, defaults for all but the value
  render() {
    return (
      <View style={styles.container}>
        <Text>QR code should be below</Text>
        <QRCode
        value="https://en.wikipedia.org/wiki/Cat"
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;