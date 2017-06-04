// external imports
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Animated, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { Card, CardAction, Button } from '../../../quark'
import { gql } from 'react-apollo'
import { createFragment } from 'apollo-client'
// local imports
import ItemSummary from './ItemSummary'
import styles from './styles'

const animationDuration = 100

class ItemCard extends PureComponent {
    state = {
        layout: {},
    }

    componentDidMount() {
        setTimeout(() => {
            this._root.measure((_, __, width, height, x, y) => {
                this.setState({
                    layout: { x, y, width, height },
                })
            })
        }, 0)
    }

    render() {
        // grab used components
        const {style, children, item, openEditor, ...unused} = this.props

        return (
            <Card style={[styles.container, style]} {...unused}>
                <View style={{flex: 1}} ref={ele => this._root = ele}>
                    <ItemSummary item={item}/>
                </View>
                <View style={styles.actions}>
                    <CardAction onPress={() => openEditor(this.state.layout)} >
                        special
                    </CardAction>
                </View>
            </Card>
        )
    }
}

ItemCard.fragments = {
    item: `
        ... on Item {
            ${ItemSummary.fragments.item}
        }
    `
}



export default ItemCard
