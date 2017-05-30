// external imports
import React from 'react'
import { Text } from 'react-native'
import { Tab } from '../../../quark'

const CategoryTab = ({category, selected}) => (
    <Tab selected={selected}>
        <Text>
            {category.name}
        </Text>
    </Tab>
)

CategoryTab.fragments = {
    category: `
        ... on Category {
            name
        }
    `
}

export default CategoryTab
