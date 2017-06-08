// external imports
import { StyleSheet } from 'react-native'
// local imports
import { grey5 } from '../../quark'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
    },
    rowLabel: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
    tableCell: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexShrink: 0,
        flex: 1,
    },
    control: {
        marginBottom: 32,
        flexShrink: 0,
    },
})
