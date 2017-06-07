// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { primaryColor, secondaryColor, grey1, grey4 } from '../../styles'

const Checkbox = ({style, children, content, ...unused}) => (
    <View
        {...unused}
        style={[
            styles.container,
            children ? styles.active : styles.inactive,
            style,
        ]}
    >
        {content}
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 2,
        borderWidth: 1,
    },
    active: {
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
    },
    inactive: {
        backgroundColor: grey1,
        borderColor: grey4,
    },
})

export default Checkbox
