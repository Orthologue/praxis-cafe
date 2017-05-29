// external imports
import React from 'react'
// local imports
import { primaryColor, primaryColorDark } from '../../styles'
import BaseButton from './Base'

const Button = ({...unused}) => (
    <BaseButton
        defaultColor={primaryColor}
        activeColor={primaryColorDark}
        textColor="white"
        {...unused}
    />
)

export default Button
