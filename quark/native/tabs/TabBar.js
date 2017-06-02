// external imports
import React from 'react'
import { ScrollView, View, StyleSheet, Text, FlatList } from 'react-native'
// local imports
import { baseDim, grey5, primaryColor } from '../../styles'

// the margin between tabs
const tabMargin = 12


class TabBar extends React.Component {
    state = {
        tabWidth: null
    }

    // we wait a frame before showing the tab bar to calculate the layout
    _onLayout({nativeEvent: {layout}}) {
        // the number of tabs to show
        const n = this.props.numTabs
        // the total width of the bar
        const w = layout.width

        // make sure the tabs are wide enough to fit the specified amount
        this.setState({
            tabWidth: Math.round((w - n * tabMargin)/ n)
        })
    }

    render() {
        const {style, children, numTabs, ...unused} = this.props

        return (
            <View style={[styles.container, style]} onLayout={this._onLayout}>
                {this.state.tabWidth && <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={children}
                    renderItem={({item: { key }}) => (
                        <View key={key} style={[{ width: this.state.tabWidth }, styles.tab]}>
                            <Text>{key}</Text>
                        </View>
                    )}
                    {...unused}
                />}
            </View>
        )
    }

    constructor(...args) {
        super(...args)
        this._onLayout = this._onLayout.bind(this)
    }
}

TabBar.defaultProps = {
    numTabs: 4,
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TabBar
