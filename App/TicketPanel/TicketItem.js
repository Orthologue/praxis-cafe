// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { gql, graphql } from 'react-apollo'
// local imports
import { baseDim } from '../../quark/styles'
import { Subtitle, Text, Monospace } from '../../quark'

const IngredientList = ({children}) => (
    children ? (
        <View>
            {children.map((extra, key) => (
                <View style={styles.ingredientContainer} key={key}>
                    <Text>
                        {extra}
                    </Text>
                </View>
            ))}
        </View>
    ) : null
)

const TicketItem = ({data: { Item, loading, errors }, entry}) => (
    <View style={styles.container}>
        <View style={styles.pluContainer}>
            <Monospace style={styles.plu}>
                {entry.plu}
            </Monospace>
        </View>
        {!loading && !errors && (
            <View style={styles.customizations}>
                <Subtitle>
                    {Item.name}
                </Subtitle>
                {entry.temperature && (
                    <Text>
                        {entry.temperature}
                    </Text>
                )}
                {entry.bread && (
                    <View style={styles.ingredientContainer}>
                        <Text>
                            {entry.bread}
                        </Text>
                    </View>
                )}
                {entry.ingredients && Object.keys(entry.ingredients).map(key => (
                    <View style={styles.ingredientContainer} key={key}>
                        <Text>
                            {`${entry.ingredients[key]} `}
                        </Text>
                        <Text>
                            {key}
                        </Text>
                    </View>
                ))}
                <IngredientList>
                    {(entry.extra || []).map(({name}) => name)}
                </IngredientList>
                <IngredientList>
                    {(entry.optionals || []).map(({name}) => name)}
                </IngredientList>
                <IngredientList>
                    {(entry.salad || []).map(({name}) => name)}
                </IngredientList>
            </View>
        )}
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4 * baseDim,
    },
    pluContainer: {
        flex: 1,
        width: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    customizations: {
        flex: 1,
        width: 10,
    },
    plu: {
        fontSize: 18,
    },
    ingredientContainer: {
        flex: 1,
        flexDirection: 'row',
    }
})


const query = gql`
    query TicketItem($plu: String!) {
        Item(plu: $plu) {
            name
        }
    }
`

export default graphql(query, {
    options: ({entry}) => ({variables: {plu: entry.plu}})
})(TicketItem)
