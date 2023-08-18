import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import Devices from './src/screens/devices';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar />
      <Devices />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#202020",
  }
})