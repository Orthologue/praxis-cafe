// external imports
import React from 'react'
// local imports
import { primary, primaryDark } from '../../styles'
import BaseButton from './Base'

const Button = ({...unused}) => (
    <BaseButton
        defaultColor={primary}
        activeColor={primaryDark}
        textColor="white"
        {...unused}
    />
)

export default Button
