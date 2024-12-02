import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ELDO RAHMAT SAPUTRA</Text>
      <Text style={styles.text1}>223510858</Text>
      <Text style={styles.text2}>5C</Text>

      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, styles.box1]} />
        {/* Spacer */}
        <View style={styles.spacer} />
        {/* Kotak 2 */}
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text1: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  text2: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 100,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '110%',
    paddingHorizontal: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#E0FFFF', 
  },
  box2: {
    backgroundColor: '#87CEEB', 
  },
  spacer: {
    flex: 1, 
  },
});
