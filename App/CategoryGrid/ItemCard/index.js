// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { Card, CardAction } from '../../../quark'
import { gql } from 'react-apollo'
import { createFragment } from 'apollo-client'
// local imports
import ItemSummary from './ItemSummary'
import styles from './styles'
import { setView } from '../../../store'

class ItemCard extends React.Component {
    render() {
        // grab used components
        const {style, children, item, goTo, category, ...unused} = this.props

        return (
            <Card style={[styles.container, style]} {...unused}>
                <ItemSummary item={item} />
                <View style={styles.actions}>
                    <CardAction onPress={() => goTo('editor', {id: item.id, fromCategory: category})}>
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
            id
            ${ItemSummary.fragments.item}
        }
    `
}

const mapDispatchToProps = dispatch => ({
    goTo: (...args) => dispatch(setView(...args))
})

export default connect(null, mapDispatchToProps)(ItemCard)
