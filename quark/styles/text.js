import { baseDim, primaryFont } from '../styles'

const reset = {
    margin: 0,
}
export const h1 = {
    ...primaryFont,
    ...reset,
    fontSize: 45,
    marginBottom: 4 * baseDim,
}

export const h2 = {
    ...primaryFont,
    ...reset,
    fontSize: 30,
    marginBottom: 3 * baseDim,
}

export const h3 = {
    ...primaryFont,
    ...reset,
    fontSize: 24,
    marginBottom: 2 * baseDim,
}

export const title = {
    ...primaryFont,
    ...reset,
    fontSize: 18,
    marginBottom: 1 * baseDim,
}

export const subtitle = {
    ...primaryFont,
    ...reset,
    fontSize: 14,
    marginBottom: 1 * baseDim,
}

export const copy = {
    ...primaryFont,
    fontSize: 14,
}

export const link = {
    ...primaryFont,
    fontSize: 14,
}
