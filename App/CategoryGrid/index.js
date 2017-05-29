// external imports
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Tab, TabBar } from '../../quark'
import { Route } from 'react-router-native'
// local imports
import ItemCard from './ItemCard'

const CategoryGrid = ({match}) => (
    <View style={{flex: 1}}>
        <View style={{height: 50}}>
            <TabBar style={styles.tabBar}>
                <FlatList
                    horizontal
                    contentContainerStyle={styles.tabBar}
                    data={[
                        {value: 'hello', key: 0},
                        {value: 'goodbye', key: 1}
                    ]}
                    renderItem={({item:{value}}) => (
                        <Tab>
                            <Text>{value}</Text>
                        </Tab>
                    )}
                />
            </TabBar>
        </View>
        <FlatList
            contentContainerStyle={styles.gridContainer}
            data={[
                {value: 'hello', key: 0},
                {value: 'goodbye', key: 1},
                {value: 'goodbye', key: 2},
                {value: 'goodbye', key: 3},
            ]}
            renderItem={({item: { value }}) => (
                <ItemCard style={styles.card}>{value}</ItemCard>
            )}
        />
    </View>
)

const styles = StyleSheet.create({
    tabBar: {
        flex: 1,
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: 12,
    },
    card: {
        margin: 12,
    }
})

export default CategoryGrid
