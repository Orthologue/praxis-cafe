// external imports
// @flow
import React from 'react'
import { View, StatusBar as NativeBar } from 'react-native'

const StatusBar = ({styles, ...unused}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
)

export default StatusBar
