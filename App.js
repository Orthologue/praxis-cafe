// external imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// local imports
import { AppBar, App } from './quark'

export default class Cafe extends React.Component {
  render() {
    return (
      <App style={styles.container}>
        <AppBar />
      </App>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
