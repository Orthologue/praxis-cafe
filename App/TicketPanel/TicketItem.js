// external imports
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
// local imports
import { baseDim, grey1 } from '../../quark/styles'
import { Subtitle, Text, Monospace, BaseButton } from '../../quark'
import { selectItem as select } from '../../store'

const IngredientList = ({children}) => children && (
    <View>
        {children.map((extra, key) => (
            <View style={styles.ingredientContainer} key={key}>
                <Text>
                    {extra}
                </Text>
            </View>
        ))}
    </View>
)

const TicketItem = ({data: { Item, loading, errors }, selectItem, entry}) => (
    <BaseButton
        defaultColor="white"
        activeColor={grey1}
        style={styles.container}
        onPress={() => selectItem(entry.id)}
    >
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
    </BaseButton>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        padding: 4 * baseDim,
        height: 'auto',
        alignItems: 'flex-start',
    },
    pluContainer: {
        flex: 2,
        width: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    customizations: {
        flex: 3,
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

const mapDispatchToProps = dispatch => ({
    selectItem: id => dispatch(select(id)),
})

const Connected = connect(null, mapDispatchToProps)(TicketItem)

export default graphql(query, {
    options: ({entry}) => ({variables: {plu: entry.plu}})
})(Connected)
