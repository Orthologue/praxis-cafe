// external imports
// @flow
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { baseDim, grey2 } from '../../quark/styles'
import { PrimaryButton } from '../../quark'

const TicketPanel = () => (
    <View style={styles.container}>
        <View style={styles.ticketContainer}>
            <Text>
                ticket container
            </Text>
        </View>
        <PrimaryButton style={styles.buttonContainer} size="large">
            submit
        </PrimaryButton>
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
        flexShrink: 0,
    },
    ticketContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    buttonContainer: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
})

export default TicketPanel
