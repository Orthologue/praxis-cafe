// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// local imports
import StatusBar from './StatusBar'
import { baseDim, grey2 } from '../../styles'

const AppBar = () => (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.appBar}>
            <Text>
                below bar
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
    },
    appBar: {
        height: 16 * baseDim,
        borderBottomWidth: 1,
        borderBottomColor: grey2,
        borderStyle: 'solid',
    }
})

export default AppBar
