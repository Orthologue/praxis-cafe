// external imports
import React from 'react'
import { Text, StyleSheet, Animated, Easing, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { baseDim } from '../../../quark'
// local imports
import { styles, containerSizes, textSizes } from './styles'


class BaseButton extends React.Component {
    _pressIn() {
        this.setState({
            animation: Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 125,
            })
        }, () => {
            // start the animation
            this.state.animation.start()
        })
    }

    _pressOut(){
        // stop the keypress animation if its running
        this.state.animation.stop()

        // start the animation to return to normal state
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 150,
        }).start()
    }

    constructor(...args) {
        super(...args)

        // initial state
        this.state = {
            opacity: new Animated.Value(0),
        }

        // function binds
        this._pressIn = this._pressIn.bind(this)
        this._pressOut = this._pressOut.bind(this)
    }

    render() {
        const {style, children, size, activeColor, defaultColor, textColor, ...unused} = this.props

        return (
            <TouchableWithoutFeedback onPressIn={this._pressIn} onPressOut={this._pressOut}>
                <Animated.View
                    {...unused}
                    style={[
                        styles.container,
                        containerSizes[size],
                        {
                            backgroundColor: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [defaultColor, activeColor]
                            }),
                        },
                        style,
                    ]}
                >
                    {children}
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

export const buttonDefaultProps = {
    size: "medium",
}

export const buttonPropTypes = {
    size: PropTypes.string,
}

BaseButton.defaultProps = {
    ...buttonDefaultProps,
}

BaseButton.propTypes = {
    ...buttonPropTypes,
    defaultColor: PropTypes.string,
    activeColor: PropTypes.string,
    hoverColor: PropTypes.string,
    textColor: PropTypes.string,
}


export default BaseButton
