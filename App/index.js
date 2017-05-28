// external imports
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
// local imports
import { App } from '../quark'
import Root from './Root'

const Cafe = () => (
    <NativeRouter>
      <Route path="/" component={Root} />
    </NativeRouter>
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
})

export default Cafe
