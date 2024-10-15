import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../navbar/index'; // Make sure this Navbar is your React Native version
import Footer from '../footer/index';
import Login from '../login/index'; // Make sure this Footer is your React Native version

function Pagelayout1() {
  return (
    <View style={styles.container}>
      {/** Navbar */}
      <Navbar />

      {/** Main content wrapped in ScrollView */}
      <ScrollView contentContainerStyle={styles.content}>
        <Login/>
      </ScrollView>

      {/** Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
  },
});

export default Pagelayout1;
