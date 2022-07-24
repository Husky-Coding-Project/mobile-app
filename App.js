import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// 1. Import 
import {QRCode, Canvas} from 'easyqrcode-react-native';

class App extends  Component{
    
    // 3. Generate QRCode
    generateQRCode = (canvas) => {
        if (canvas !== null){
            // QRCode options
            var options = {
                text: "hello world",
        	};
        	// Create QRCode Object
        	var qrCode = new QRCode(canvas, options);
          return qrCode;
        }
      }
    
   render() { 
      return (
          <View style={styles.container}>
            <Text>Below should be QR code</Text>
            {/* 2. QRCode Canvas  */}
            <Canvas ref={this.generateQRCode}/>
          </View>
      );
  }
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