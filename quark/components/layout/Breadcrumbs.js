// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// local imports
import { H2 } from '..'

const Breadcrumbs = ({style, children, ...unused}) => {
    // add the divider after every child
    let childs = children.map((child, i) => (
        <View style={styles.level} key={i}>
            <H2 style={styles.text}>
                {child}
            </H2>
            {i !== children.length - 1 && <Text style={styles.divider}>></Text>}
        </View>
    ))
    return (
        <View style={styles.container} {...unused} >
            {childs}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    level: {
        flexDirection: 'row',
    },
    divider: {

    },
})

export default Breadcrumbs
