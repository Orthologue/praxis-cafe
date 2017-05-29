// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { baseDim } from '../../styles'

const Tab = ({style, ...unused}) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 4 * baseDim,
        paddingTop: 4 * baseDim,
        paddingRight: 4 * baseDim,
    }
})

export default Tab
