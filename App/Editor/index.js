// external imports
import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import styles from './styles'
import { Breadcrumbs, Button } from '../../quark/components'

const ItemEditor = ({data, closeEditor}) => data.loading ? (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Text> loading... </Text>
    </View>
) : (
    <ScrollView style={styles.container}>
        <Button onPress={closeEditor}>
            hello
        </Button>
        <Breadcrumbs>
            <Text>hello</Text>
            <Text>hello</Text>
        </Breadcrumbs>
    </ScrollView>
)


const query = gql`
    query ItemEditor($itemId: ID!) {
        Item(id: $itemId) {
            name
        }
    }
`

export default graphql(query, {
    options: ({ itemId }) => ({
        variables: {
            itemId,
        }
    })
})(ItemEditor)
