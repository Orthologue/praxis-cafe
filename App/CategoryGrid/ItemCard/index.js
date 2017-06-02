// external imports
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Animated, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { Card, CardAction, Button } from '../../../quark'
import { gql } from 'react-apollo'
import { createFragment } from 'apollo-client'
// local imports
import ItemSummary from './ItemSummary'
import styles from './styles'

const animationDuration = 100

class ItemCard extends PureComponent {
    state = {
        showEditor: false,
        layout: {},
        origin: {},
    }

    _openEditor() {
        this.setState({
            showEditor: true,
        }, () => {
            // we have a few things we need to animate at once
            Animated.parallel([
                Animated.timing(this.state.layout.width, {
                    toValue: 778,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.layout.height, {
                    toValue: 684,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.layout.x, {
                    toValue: 248,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.layout.y, {
                    toValue: 85,
                    duration: animationDuration,
                })
            ]).start()
        })
    }

    _closeEditor() {
        // we have a few things we need to animate at once
        Animated.parallel([
            Animated.timing(this.state.layout.width, {
                toValue: this.state.origin.width,
                duration: animationDuration,
            }),
            Animated.timing(this.state.layout.height, {
                toValue: this.state.origin.height,
                duration: animationDuration,
            }),
            Animated.timing(this.state.layout.x, {
                toValue: this.state.origin.x,
                duration: animationDuration,
            }),
            Animated.timing(this.state.layout.y, {
                toValue: this.state.origin.y,
                duration: animationDuration,
            })
        ]).start(() => {
            this.setState({
                showEditor: false,
            })
        })

    }

    componentDidMount() {
        setTimeout(() => {
            this._root.measure((_, __, width, height, x, y) => {
                this.setState({
                    origin: { x, y, width, height },
                    layout: {
                        x: new Animated.Value(x),
                        y: new Animated.Value(y),
                        width: new Animated.Value(width),
                        height: new Animated.Value(height),
                    }
                })
            })
        }, 0)
    }

    render() {
        // grab used components
        const {style, children, item, ...unused} = this.props

        return (
            <Card style={[styles.container, style]} {...unused}>
                <View style={{flex: 1}} ref={ele => this._root = ele}>
                    <ItemSummary item={item} onPress={this._openEditor} />
                </View>
                {this.state.showEditor && (
                    <Modal transparent>
                        <Animated.ScrollView
                            style={{
                                width: this.state.layout.width,
                                height: this.state.layout.height,
                                top: this.state.layout.y,
                                left: this.state.layout.x,
                                position: 'absolute',
                                backgroundColor: 'red',
                            }}
                        >
                            <Button onPress={this._closeEditor}>
                                close
                            </Button>
                        </Animated.ScrollView>
                    </Modal>
                )}
                <View style={styles.actions}>
                    <CardAction>
                        special
                    </CardAction>
                </View>
            </Card>
        )
    }

    constructor(...args) {
        super(...args)

        // function binds
        this._openEditor = this._openEditor.bind(this)
        this._closeEditor = this._closeEditor.bind(this)
    }
}

ItemCard.fragments = {
    item: `
        ... on Item {
            ${ItemSummary.fragments.item}
        }
    `
}



export default ItemCard
