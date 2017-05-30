// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { primaryColor, baseDim } from '../../styles'

const Tab = ({style, selected, ...unused}) => (
    <View style={[styles.container, selected && styles.selected, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        display: 'inline-flex',
        paddingLeft: 2 * baseDim,
        paddingRight: 2 * baseDim,
        paddingBottom: baseDim,
        marginRight: 3 * baseDim,
    },
    selected: {
        borderBottomColor: primaryColor,
        borderStyle: 'solid',
        borderBottomWidth: 2,
    }
})

export default Tab
