// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { Card, CardAction } from '../../../quark'
import { gql } from 'react-apollo'
import { createFragment } from 'apollo-client'
// local imports
import ItemSummary from './ItemSummary'
import styles from './styles'

class ItemCard extends React.Component {
    render() {
        // grab used components
        const {style, children, item, ...unused} = this.props

        return (
            <Card style={[styles.container, style]} {...unused}>
                <ItemSummary item={item} />
                <View style={styles.actions}>
                    <CardAction>
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
