// external imports
import React from 'react'
import { Link } from 'react-router-native'
import { View, Text } from 'react-native'

const CategoryGrid = () => (
    <View>
        <Text> categories </Text>
        <Link to="/editor">
            <Text> editor </Text>
        </Link>
    </View>
)

export default CategoryGrid
