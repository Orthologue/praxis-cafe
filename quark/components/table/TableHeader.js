// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey5 } from '../../styles'
import {styles as rowStyles} from './TableRow'

const TableHeader = ({style, ...unused}) => (
    <View style={[rowStyles.container, styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: grey5,
    }
})

export default TableHeader
