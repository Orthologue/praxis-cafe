// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { baseDim } from '../../styles'
import TabBar from './TabBar'

class TabView extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
    }

    state = {
        // the current selection
        selected: 2
    }

    _selectTab(key) {
        // the index of the matching data
        let index

        // look for the tab with the matching key
        for (const i = 0; i < this.props.data.length ; i++) {
            // if we found the match
            if (this.props.data[i].key === key) {
                // save the index
                index = i
                // we're done with the loop
                break
            }
        }

        // keep track of the new selection
        this.setState({selected: index})
    }

    render() {
        const {style, children, data, numTabs, ...unused} = this.props

        return (
            <View style={[styles.container, style]}>
                <TabBar selected={this.state.selected} selectTab={this._selectTab.bind(this)}>
                    {data}
                </TabBar>
                <View style={styles.content}>
                    {children(this.props.data[this.state.selected])}
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
        paddingRight: 4 * baseDim,
        paddingBottom: 4 * baseDim,
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
