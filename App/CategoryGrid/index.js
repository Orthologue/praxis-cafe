// external imports
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { TabBar } from '../../quark'
import { Route, Link } from 'react-router-native'
import { gql, graphql } from 'react-apollo'
// local imports
import ItemCard from './ItemCard'
import CategoryTab from './CategoryTab'
import styles from './styles'

const CategoryGrid = ({data: {error, ...data}, match}) => !data.loading && (
    <View style={{flex: 1}}>
        <View style={{height: 50}}>
            <TabBar style={styles.tabBar}>
                <FlatList
                    horizontal
                    contentContainerStyle={styles.tabBar}
                    data={data.allCategories.map(value => ({value, key: value.id}))}
                    renderItem={({item:{value}}) => (
                        <Link to={`/categories/${value.id}`}>
                            <View>
                                <CategoryTab
                                    selected={data.variables.selectedCategory === value.id}
                                    category={value}
                                />
                            </View>
                        </Link>
                    )}
                />
            </TabBar>
        </View>
        {data.Category && (
            <FlatList
                contentContainerStyle={styles.gridContainer}
                data={data.Category.items.map(item => ({...item, key: item.id}))}
                renderItem={({item}) => (
                    <ItemCard style={styles.card} item={item} />
                )}
            />
        )}
    </View>
)

// the component data requirements
const query = gql`
    query CategoryGrid($selectedCategory: ID!) {
        allCategories {
            id
            ${CategoryTab.fragments.category}
        }
        Category(id: $selectedCategory) {
            items {
                id
                ${ItemCard.fragments.item}
            }
        }
    }
`

export default graphql(query, {
    options: ({match}) => ({
        variables: {
            selectedCategory: match.params.categoryName || "cj3afxsaqhkya0132ut7a1omg",
        },
    })
})(CategoryGrid)
