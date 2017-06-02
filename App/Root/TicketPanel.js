// external imports
// @flow
import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { baseDim, grey2 } from '../../quark/styles'
import { PrimaryButton } from '../../quark'

const TicketPanel = () => (
    <View style={styles.container}>
        <ScrollView style={styles.ticketContainer}>
            <Text>
                ticket container
            </Text>
        </ScrollView>
        <PrimaryButton style={styles.buttonContainer} size="large">
            submit
        </PrimaryButton>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
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
        height: 500,
    },
    buttonContainer: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        display: 'flex',
    }
})

export default TicketPanel
