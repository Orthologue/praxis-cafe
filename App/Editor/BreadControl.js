// @flow
// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    Title, Text, Checkbox,
} from '../../quark/components'
import { primaryColor } from '../../quark/styles'

const BreadControl = ({item, bread: selected, onChange, ...unused}) => (
    <View style={styles.container} {...unused}>
        <Title>
            Bread Alternatives
        </Title>
        <View style={styles.choices}>
            {item.bread.map((bread, i) => (
                <Checkbox
                    key={i}
                    style={styles.checkbox}
                    content={
                        <Text style={styles.text}>{bread}</Text>
                    }
                    onPress={() => onChange(bread)}
                >
                    {bread === selected}
                </Checkbox>
            ))}
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
        flexDirection: 'row',
    },
    checkbox: {
        marginRight: 12,
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
