// external imports
import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import { setView } from '../../store'
import { Breadcrumbs } from '../../quark/components'

const ItemEditor = ({data, view, goTo}) => data.loading ? <Text> loading... </Text> : (
    <View>
        <Breadcrumbs>
            <Text onPress={() => goTo('', {})}> {view.config.fromCategory.name}</Text>
            <Text> {data.Item.name}</Text>
        </Breadcrumbs>
    </View>
)

const selector = ({app: { view }}) => ({view})

const mapDispatchToProps = dispatch => ({
    goTo: (...args) => dispatch(setView(...args)),
})

const query = gql`
    query ItemEditor($itemId: ID!) {
        Item(id: $itemId) {
            name
        }
    }
`

export default connect(selector, mapDispatchToProps)(graphql(query, {
    options: ({ view }) => ({
        variables: {
            itemId: view.config.id
        }
    })
})(ItemEditor))
