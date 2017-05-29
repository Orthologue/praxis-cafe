// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, grey2, primaryColor, CardAction } from '../../../quark'
// local imports
import ItemSummary from './ItemSummary'

const ItemCard = ({style, children, ...unused}) => (
    <Card style={[styles.container, style]} {...unused}>
        <ItemSummary>
            {{number: 1, name: children}}
        </ItemSummary>
        <View style={styles.actions}>
            <CardAction>
                special
            </CardAction>
        </View>
    </Card>
)

const actionStyle = {
}

const styles = StyleSheet.create({
    container: {
        height: 144,
        width: 224,
    },
    info: {
        flex: 1,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    actionText: {
        color: primaryColor,
    },
    leftAction: {
        ...actionStyle,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: grey2,
    },
    rightAction: {
        ...actionStyle,
    }
})

export default ItemCard
