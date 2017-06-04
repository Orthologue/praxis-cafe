// external imports
import React from 'react'
import { Text } from 'react-native'
// local imports
import * as styles from '../../styles/text'

export const H1 = ({style, ...unused}) => (
    <Text style={{...styles.h1, ...style}} {...unused} />
)

export const H2 = ({style, ...unused}) => (
    <Text style={{...styles.h2, ...style}} {...unused} />
)

export const H3 = ({style, ...unused}) => (
    <Text style={{...styles.h3, ...style}} {...unused} />
)

export const Title = ({style, ...unused}) => (
    <Text style={{...styles.title, ...style}} {...unused} />
)

export const Subtitle = ({style, ...unused}) => (
    <Text style={{...styles.subtitle, ...style}} {...unused} />
)

export const Copy = ({style, ...unused}) => (
    <Text style={{...styles.copy, ...style}} {...unused} />
)

export const Link = ({style, ...unused}) => (
    <Text style={{...styles.link, ...style}} {...unused} />
)
