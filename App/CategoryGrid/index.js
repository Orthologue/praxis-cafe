// external imports
import React, { PureComponent } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { TabBar, TabView, Tab } from '../../quark/native'
import { Route, Link } from 'react-router-native'
import { gql, graphql } from 'react-apollo'
import { TabViewAnimated } from 'react-native-tab-view'
import _ from 'lodash'
// local imports
import ItemCard from './ItemCard'
import styles from './styles'

const CategoryGrid = ({style, data, ...rest}) => data.loading ? <Text>loading...</Text> : (
    <TabView data={data.allCategories.map(cat => ({...cat, key: cat.name}))} numTabs={1}>
        {(category) => {
            // we're showing rows of 3
            const rows = _.chunk(category.items, 3)

            return (
                <View style={styles.row} key={rowIdx}>
                    {[
                        ...row.map(item => <ItemCard item={item} key={item.id} style={styles.card}/>),
                        ...Array.apply(null, {length: 3 - row.length}).map(Number.call, Number).map(
                            (_, i) => (
                                <View style={[styles.placeholder, styles.card]} key={`${rowIdx}:${i}`}>
                                    {console.log(i)}
                                </View>
                            )
                        )
                    ]}
                </View>
            )
        }}
    </TabView>
)

// the component data requirements
const query = gql`
    query CategoryGrid {
        allCategories(orderBy: name_DESC) {
            id
            name
            items {
                id
                ${ItemCard.fragments.item}
            }
        }
    }
`

export default graphql(query)(CategoryGrid)
