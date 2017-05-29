// external imports
// @flow
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseDim, grey2 } from '../../quark/styles'
import { Button } from '../../quark'

const TicketPanel = () => (
    <View style={styles.container}>
        <View style={styles.ticketContainer}>
            <Text>
                ticket container
            </Text>
        </View>
        <Button style={styles.buttonContainer}>
            button
        </Button>
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
        flexShrink: 0,
    },
    ticketContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    buttonContainer: {
        height: 200,
    }
})

export default TicketPanel
