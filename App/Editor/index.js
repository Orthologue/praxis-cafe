// external imports
import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
import { Map } from 'immutable'
// local imports
import styles from './styles'
import IngredientControl from './IngredientControl'
import InstructionsControl from './InstructionsControl'
import BreadControl from './BreadControl'
import {
    Breadcrumbs, BreadcrumbChild,
} from '../../quark/components'

class ItemEditor extends React.Component {
    state = {
        ingredients: {}, // a map of ingredient name -> "none" | "light" | "norm" | "extra" | "side"
        bread: "sourdough",
        instructions: [],
    }

    render() {
        const {data, fromCategory, closeEditor} = this.props

        return data.loading ? (
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text> loading... </Text>
            </View>
        ) : (
            <View style={styles.container}>
                <Breadcrumbs>
                    <BreadcrumbChild onPress={closeEditor}>
                        {fromCategory}
                    </BreadcrumbChild>
                    <BreadcrumbChild active={true}>
                        {data.item.name}
                    </BreadcrumbChild>
                </Breadcrumbs>
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                    <IngredientControl
                        ingredients={this.state.ingredients}
                        onChange={this._update('ingredients')}
                        item={data.item}
                        style={styles.control}
                    />
                    {data.item.bread && data.item.bread.length > 0 && (
                        <BreadControl
                            bread={this.state.bread}
                            onChange={this._update('bread')}
                            item={data.item}
                            style={styles.control}
                        />
                    )}
                    <InstructionsControl
                        instructions={this.state.instructions}
                        onChange={this._update('instructions')}
                    />
                </ScrollView>
            </View>
        )
    }

    constructor(...args) {
        super(...args)

        this._update = name => val => this.setState({[name]: val})
    }
}

const query = gql`
    query ItemEditor($itemId: ID!) {
        item: Item(id: $itemId) {
            name
            bread

            ${IngredientControl.fragments.item}
            ${BreadControl.fragments.item}
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
