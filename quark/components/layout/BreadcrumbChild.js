// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
// local imports
import { grey5, primaryColor } from '../../styles'
import { h3 } from '../../styles/text'
import { SecondaryButton } from '../buttons'

const BreadcrumbChild = ({active, ...unused}) => (
    <SecondaryButton
        textColor={active ? primaryColor : grey5}
        textStyle={styles.text}
        {...unused}
    />
)

const styles = StyleSheet.create({
    text: {
        ...h3,
        marginLeft: 0,
        marginRight: 0,
        fontSize: 20,
    }
})

export default BreadcrumbChild
