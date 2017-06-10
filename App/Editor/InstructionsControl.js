// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    updateList,
    Title, TextInput,
} from '../../quark/components'
import { primaryColor } from '../../quark/styles'


const InstructionsControl = ({instructions = [], item, onChange}) => (
    <View style={styles.container}>
        <Title>
            Instructions
        </Title>
        <View style={styles.choices}>
            {instructions.map((instruction, i) => (
                <TextInput
                    style={styles.input}
                    asModal={true}
                    key={i}
                    onChange={val => onChange(updateList(instructions, i, val))}
                >
                    {instruction}
                </TextInput>
            ))}
                <TextInput asModal={true} onChange={val => onChange([...instructions, val])} value="">
                    {''}
                </TextInput>
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

export default InstructionsControl
