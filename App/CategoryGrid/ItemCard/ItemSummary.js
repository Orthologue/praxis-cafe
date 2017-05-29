// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton, grey1 } from '../../../quark'

const ItemSummary = ({children: item}) => (
    <BaseButton
        style={styles.container}
        defaultColor="white"
        activeColor={grey1}
    >
        <View style={[styles.text, styles.number]}>
            <Text>
                {item.number}
            </Text>
        </View>
        <View style={[styles.text, styles.name]}>
            <Text>
                {item.name}
            </Text>
        </View>
    </BaseButton>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    number: {
    },
    name: {
        justifyContent: 'flex-start',
    },
})

export default ItemSummary
