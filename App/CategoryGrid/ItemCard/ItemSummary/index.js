// @flow
// external imports
import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton, grey1, primaryColor } from '../../../../quark'
// local imports
import styles from './styles'
import { addItem } from '../../../../store'

const ItemSummary = ({item, submitItem, ...unused}) => (
    <BaseButton
        style={styles.container}
        defaultColor="white"
        activeColor={grey1}
        onPress={() => submitItem({plu: item.plu})}
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


const mapDispatchToProps = dispatch => ({
    submitItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(ItemSummary)
