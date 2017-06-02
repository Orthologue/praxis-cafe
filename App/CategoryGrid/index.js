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

const CategoryGrid = ({style, data, ...rest}) => {
    // if we are still loading the list
    if (data.loading) {
        // return the loading indicator
        return <Text>loading...</Text>
    }

    // chunk the data into rows once
    const categories = data.allCategories.map(cat => ({key: cat.name, rows: _.chunk(cat.items, 3)}))

    return (
        <TabView data={categories} numTabs={1}>
            {/* the page for each category */}
            {({rows, key}) => (
                <ScrollView style={styles.gridContainer} key={key}>
                    {rows.map((row, rowIdx) => (
                        <View style={styles.row} key={rowIdx}>
                            {[
                                ...row.map(item => <ItemCard item={item} key={item.id} style={styles.card}/>),
                                ...Array.apply(null, {length: 3 - row.length}).map(Number.call, Number).map(
                                    (_, i) => (
                                        <View style={[styles.placeholder, styles.card]} key={`${rowIdx}:${i}`}/>
                                    )
                                )
                            ]}
                        </View>
                    ))}
                </ScrollView>
            )}
        </TabView>
    )
}

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
