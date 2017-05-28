// external imports
import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import { AppBar, App } from '../../quark'
// local imports
import TicketPanel from './TicketPanel'
import CategoryGrid from '../CategoryGrid'
import Editor from '../Editor'

const RootView = () => (
    <App>
        <AppBar style={styles.appBar}>
            <Text>
                hello
            </Text>
        </AppBar>
        <View style={styles.content}>
            <TicketPanel />
            <Switch>
                <Route path="/categories" component={CategoryGrid}/>
                <Route path="/editor" component={Editor}/>
                <Redirect to="/categories" />
            </Switch>
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
