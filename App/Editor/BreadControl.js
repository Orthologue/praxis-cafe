// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    H3,
} from '../../quark/components'

const BreadControl = ({item}) => (
    <View style={styles.container}>
        <H3>
            Bread
        </H3>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

BreadControl.fragments = {
    item: `
        ... on Item {
            bread
        }
    `
}

export default BreadControl
