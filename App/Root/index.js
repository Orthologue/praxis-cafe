// external imports
import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Route, Switch } from 'react-router-native'
import { AppBar, App } from '../../quark'
// local imports
import TicketPanel from './TicketPanel'

const RootView = () => (
    <App>
        <AppBar style={styles.appBar}>
            <Text>
                hello
            </Text>
        </AppBar>
        <View style={styles.content}>
            <TicketPanel />
            <Text>
                bello
            </Text>
        </View>
    </App>
)

const styles = StyleSheet.create({
    appBar: {
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
    }
})

export default RootView
