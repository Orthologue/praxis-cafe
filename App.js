// external imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// local imports
import { AppBar, App } from './quark'

const Cafe = () => (
  <App>
    <AppBar>
      <Text>
        hello
      </Text>
    </AppBar>
    <View style={styles.content}>
      <Text>
        content
      </Text>
    </View>
    <Text>
      content
    </Text>
  </App>
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
})

export default Cafe
