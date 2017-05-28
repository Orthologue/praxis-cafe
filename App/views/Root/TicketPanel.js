// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseDim, grey2 } from '../../../quark/styles'

const TicketPanel = () => (
    <View style={styles.container}>
        <Text>
            hello
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 62 * baseDim,
        borderRightColor: grey2,
        borderRightWidth: 1,
        borderStyle: 'solid',
        paddingTop: 3 * baseDim,
        paddingBottom: 3 * baseDim,
    },
})

export default TicketPanel
