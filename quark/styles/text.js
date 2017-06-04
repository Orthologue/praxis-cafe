// external imports
import { StyleSheet } from 'react-native'
// local imports
import { baseDim, primaryFont } from '../styles'

const reset = {
    margin: 0,
}
export const h1 = StyleSheet.create({
    ...primaryFont,
    ...reset,
    fontSize: 45,
    marginBottom: 4 * baseDim,
})

export const h2 = StyleSheet.create({
    ...primaryFont,
    ...reset,
    fontSize: 30,
    marginBottom: 3 * baseDim,
})

export const h3 = StyleSheet.create({
    ...primaryFont,
    ...reset,
    fontSize: 24,
    marginBottom: 2 * baseDim,
})

export const title = StyleSheet.create({
    ...primaryFont,
    ...reset,
    fontSize: 18,
    marginBottom: 1 * baseDim,
})

export const subtitle = StyleSheet.create({
    ...primaryFont,
    ...reset,
    fontSize: 14,
    marginBottom: 1 * baseDim,
})

export const text = StyleSheet.create({
    ...primaryFont,
    fontSize: 14,
})

export const link = StyleSheet.create({
    ...primaryFont,
    fontSize: 14,
})
