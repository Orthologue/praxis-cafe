// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { primaryColor, secondaryColor, grey1, grey4 } from '../../styles'

const Checkbox = ({style, children, content, ...unused}) => (
    <View
        {...unused}
        style={[
            styles.container,
            content ? styles.withContent : styles.withoutContent,
            children ? styles.active : styles.inactive,
            style,
        ]}
    >
        <Text style={children ? styles.activeText : styles.inactiveText}>{content}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    withContent: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
    },
    withoutContent: {
        height: 36,
        width: 36,
    },
    active: {
        backgroundColor: secondaryColor,
        borderColor: primaryColor,
    },
    activeText: {
        color: primaryColor,
    },
    inactive: {
        borderColor: grey4,
    },
    inactiveText: {
        color: grey4,
    },
})

export default Checkbox
