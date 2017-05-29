// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { primaryColor, baseDim } from '../../styles'

const Tab = ({style, ...unused}) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        display: 'inline-flex',
        borderBottomColor: primaryColor,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        paddingLeft: 2 * baseDim,
        paddingRight: 2 * baseDim,
        paddingBottom: baseDim,
        marginRight: 3 * baseDim,
    }
})

export default Tab
