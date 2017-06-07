// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'

const TableCell = ({style, ...unused}) => (
    <View style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {

    }
})

export default TableCell
