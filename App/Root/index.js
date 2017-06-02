// external imports
import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import { connect } from 'react-redux'
import { App } from '../../quark'
import { AppBar } from '../../quark/native'
// local imports
import { Provider } from '../../store'
import TicketPanel from './TicketPanel'
import CategoryGrid from '../CategoryGrid'
import Editor from '../Editor'

const selector = ({app: { view }}) => ({view})

const RootView = connect(selector)(({view = {}}) => {
    // the component to show depends on the view path
    const Component = {
        'editor': Editor,
    // the default view is the grid
    }[view.path] || CategoryGrid

    return (
        <Provider>
            <App>
                <AppBar style={styles.appBar}>
                    <Text>
                        hello
                    </Text>
                </AppBar>
                <View style={styles.content}>
                    <TicketPanel />
                    <Component />
                </View>
            </App>
        </Provider>
    )
})

const styles = StyleSheet.create({
    appBar: {
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    }
})

export default () => (
    <Provider>
        <RootView/>
    </Provider>
)
