// external imports
import React from 'react'
import { View, Text , StyleSheet, Image} from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import { connect } from 'react-redux'
import { App, H3 } from '../quark'
import { AppBar } from '../quark/native'
// local imports
import { Provider } from '../store'
import TicketPanel from './TicketPanel'
import CategoryGrid from './CategoryGrid'
import Editor from './Editor'

const selector = ({app: { view }}) => ({view})

const RootView = connect(selector)(({view = {}}) => {
    // the component to show depends on the view path
    const Component = {
    // the default view is the grid
    }[view.path] || CategoryGrid

    return (
        <Provider>
            <App>
                <AppBar style={styles.appBar}>
                    <Image
                        source={require('./radish-top.png')}
                        style={styles.branding}
                    />
                    <View style={styles.appName}>
                        <H3>
                            Café
                        </H3>
                    </View>
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
    branding: {
        display: 'flex',
        height: 64,
        width: 64,
        alignSelf: 'flex-end',
        marginLeft: 20,
        marginTop: 4,
    },
    appName: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
