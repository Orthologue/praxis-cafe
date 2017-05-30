// external imports
import { StyleSheet } from 'react-native'
import { grey2, primaryColor } from '../../../quark'

export default StyleSheet.create({
    container: {
        height: 124,
        width: 224,
    },
    info: {
        flex: 1,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    actionText: {
        color: primaryColor,
    },
    leftAction: {
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: grey2,
    },
    rightAction: {
    }
})
