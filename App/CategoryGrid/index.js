// external imports
import React, { PureComponent } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { TabBar } from '../../quark'
import { Route, Link } from 'react-router-native'
import { gql, graphql } from 'react-apollo'
import { TabViewAnimated } from 'react-native-tab-view'
// local imports
import ItemCard from './ItemCard'
import styles from './styles'


class CategoryGrid extends PureComponent {
    state = {
        index: 0,
    }

    constructor(...args) {
        super(...args)
        this._renderScene = this._renderScene.bind(this)
    }

    _handleChangeTab = index => this.setState({ index })

    _renderHeader = props => <TabBar {...props} />

    _renderScene = props => {
        // the category we are looking at
        const categoryId = props.route.key

        // find the matching category
        const category = this.props.data.allCategories.find(category => category.id === categoryId)

        return (
            <ScrollView style={styles.gridContainer} key={categoryId}>
                {category.items.map(item => <ItemCard item={item} style={styles.card}/>)}
            </ScrollView>
        )
    }

    get _routes() {
        const { data } = this.props

        return data.allCategories.map(category => ({
            key: category.id,
            title: category.name,
        }))
    }

    render() {
        const { data } = this.props

        return data.loading ? <Text>loading...</Text> : (
                <TabViewAnimated
                    style={styles.container}
                    navigationState={{
                        ...this.state,
                        routes: this._routes,
                    }}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            )
    }
}

// the component data requirements
const query = gql`
    query CategoryGrid {
        allCategories(orderBy: name_DESC) {
            id
            name
            items {
                ${ItemCard.fragments.item}
            }
        }
    }
`

export default graphql(query)(CategoryGrid)
