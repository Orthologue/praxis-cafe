// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// local imports
import { baseDim, grey5, primaryColor } from '../../styles'

const Tab = ({style, ...unused}) => (
    <View style={[styles.container, style]}>
        <Text>hello</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {

    },
    label: {
        color: grey5,
    },
    tab: {
        flexGrow: 0,
    },
    indicator: {
        backgroundColor: primaryColor,
    }
})

export default Tab
