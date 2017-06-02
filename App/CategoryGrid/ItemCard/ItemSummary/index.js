// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton, grey1, primaryColor } from '../../../../quark'
// local imports
import styles from './styles'

const ItemSummary = ({item, ...unused}) => (
    <BaseButton
        style={styles.container}
        defaultColor="white"
        activeColor={grey1}
        {...unused}
    >
        <View style={[styles.text, styles.number]}>
            <Text>
                {item.plu}
            </Text>
        </View>
        <View style={[styles.text, styles.name]}>
            <Text style={styles.nameText}>
                {item.name}
            </Text>
        </View>
    </BaseButton>
)

ItemSummary.fragments = {
    item: `
        ... on Item {
            plu
            name
        }
    `
}

export default ItemSummary
