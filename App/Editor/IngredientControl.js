// external imports
import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    Form,
    Title, Subtitle,
    Checkbox,
    Table, TableHeader, TableHeaderCell, TableHeaderRow, TableRow, TableCell,
} from '../../quark/components'

const ItemIngredientSummary = ({item, ingredients, onChange, ...unused}) => (
    <View style={styles.container} {...unused}>
        <Title>
            Ingredients
        </Title>
        <TableHeader>
            <TableHeaderCell style={styles.rowLabel}/>
            <TableHeaderCell style={styles.tableCell}>
                <Text>
                    None
                </Text>
            </TableHeaderCell>
            <TableHeaderCell style={styles.tableCell}>
                <Text>
                    Light
                </Text>
            </TableHeaderCell>
            <TableHeaderCell style={styles.tableCell}>
                <Text>
                    Norm
                </Text>
            </TableHeaderCell>
            <TableHeaderCell style={styles.tableCell}>
                <Text>
                    Extra
                </Text>
            </TableHeaderCell>
            <TableHeaderCell style={styles.tableCell}>
                <Text>
                    Side
                </Text>
            </TableHeaderCell>
        </TableHeader>
        {item.ingredients.map((ingredient, i) => {
            // the current selection for the particular ingredient
            const current = ingredients[ingredient.name]
            const val = typeof current === 'undefined' ? 'norm' : current

            // the function to call to change the right ingredient
            const set = val => () => onChange({...ingredients, [ingredient.name]: val})

            // return the row for a single ingredient
            return (
                <TableRow key={ingredient.id} last={i === item.ingredients.length - 1}>
                    <TableCell style={styles.rowLabel}>
                        <Subtitle style={{fontSize: 16, margin: 0, marginBottom: 0,}}>
                            {ingredient.name}
                        </Subtitle>
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                        <Checkbox onPress={set('none')}>
                            {val === 'none'}
                        </Checkbox>
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                        <Checkbox onPress={set('light')}>
                            {val === 'light'}
                        </Checkbox>
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                        <Checkbox onPress={set('norm')}>
                            {val === 'norm'}
                        </Checkbox>
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                        <Checkbox onPress={set('extra')}>
                            {val === 'extra'}
                        </Checkbox>
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                        <Checkbox onPress={set('side')}>
                            {val === 'side'}
                        </Checkbox>
                    </TableCell>
                </TableRow>
            )
        })}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    rowLabel: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
    tableCell: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

ItemIngredientSummary.fragments = {
    item: `
        ... on Item {
            ingredients {
                id
                name
            }
        }
    `
}

export default ItemIngredientSummary
