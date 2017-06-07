// external imports
import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
// local imports
import {
    H3, Subtitle,
    Checkbox,
    Table, TableHeader, TableHeaderCell, TableHeaderRow, TableRow, TableCell,
} from '../../quark/components'

const ItemIngredientSummary = ({item, ...unused}) => (
    <View style={styles.container} {...unused}>
        <H3>
            Ingredients
        </H3>
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
        {item.ingredients.map((ingredient, i) => (
            <TableRow key={ingredient.id} last={i === item.ingredients.length - 1}>
                <TableCell style={styles.rowLabel}>
                    <Subtitle style={{fontSize: 16, margin: 0, marginBottom: 0,}}>
                        {ingredient.name}
                    </Subtitle>
                </TableCell>
                <TableCell style={styles.tableCell}>
                    <Checkbox>{false}</Checkbox>
                </TableCell>
                <TableCell style={styles.tableCell}>
                    <Checkbox>{false}</Checkbox>
                </TableCell>
                <TableCell style={styles.tableCell}>
                    <Checkbox>{true}</Checkbox>
                </TableCell>
                <TableCell style={styles.tableCell}>
                    <Checkbox>{false}</Checkbox>
                </TableCell>
                <TableCell style={styles.tableCell}>
                    <Checkbox>{false}</Checkbox>
                </TableCell>
            </TableRow>
        ))}
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
