// external imports
import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import styles from './styles'
import { Breadcrumbs, BreadcrumbChild } from '../../quark/components'

const ItemEditor = ({data, fromCategory, closeEditor}) => data.loading ? (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Text> loading... </Text>
    </View>
) : (
    <ScrollView style={styles.container}>
        <Breadcrumbs>
            <BreadcrumbChild onPress={closeEditor}>
                {fromCategory}
            </BreadcrumbChild>
            <BreadcrumbChild active={true}>
                {data.item.name}
            </BreadcrumbChild>
        </Breadcrumbs>
    </ScrollView>
)


const query = gql`
    query ItemEditor($itemId: ID!) {
        item: Item(id: $itemId) {
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
