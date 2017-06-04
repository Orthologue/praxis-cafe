// external imports
import React from 'react'
// local imports
import { grey5, primaryColor } from '../../styles'
import BaseWithText from './Text'

const SecondaryButton = ({...unused}) => (
    <BaseWithText
        defaultColor="white"
        activeColor="white"
        textColor={grey5}
        {...unused}
    />
)

export default SecondaryButton
