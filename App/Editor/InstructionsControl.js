// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    H3, TextInput,
} from '../../quark/components'
import { primaryColor } from '../../quark/styles'

const BreadControl = ({item}) => (
    <View style={styles.container}>
        <H3>
            Instructions
        </H3>
        <View style={styles.choices}>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <TextInput/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    choices: {
        display: 'flex',
        flexDirection: 'column',
    },
    checkbox: {
        marginRight: 12,
    },
    input: {
        marginBottom: 12,
    }
})

export default BreadControl
