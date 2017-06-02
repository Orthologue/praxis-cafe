// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { baseDim } from '../../styles'
import TabBar from './TabBar'
class TabView extends React.Component {
    state = {
        layout: null
    }

    // when we've computed the length
    _onLayout({nativeEvent: { layout }}) {
        console.log('layout', layout)
    }

    constructor(...args) {
        super(...args)
        this._onLayout = this._onLayout.bind(this)
    }

    render() {
        const {style, children, data, numTabs, ...unused} = this.props
        return (
            <View style={[styles.container, style]}>
                <TabBar>{data}</TabBar>
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        paddingLeft: 4 * baseDim,
        paddingTop: 4 * baseDim,
        paddingRight: 4 * baseDim,
    },
    tab: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    content: {
        flex: 1,
    }
})

export default TabView
