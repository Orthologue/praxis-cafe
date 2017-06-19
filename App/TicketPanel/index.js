// @flow
// external imports
import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { baseDim, grey2 } from '../../quark/styles'
import { PrimaryButton } from '../../quark'
// local imports
import TicketItem from './TicketItem'

const TicketPanel = ({items}) => (
    <View style={styles.container}>
        <ScrollView style={styles.ticketContainer}>
            {items.map((item, i) => <TicketItem entry={item} key={i} />)}
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

const selector = ({app: { items }}) => ({ items })

export default connect(selector)(TicketPanel)
