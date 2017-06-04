// external imports
import React, { PureComponent } from 'react'
import { View, Text, FlatList, ScrollView, Modal, Animated } from 'react-native'
import { TabBar, TabView, Tab } from '../../quark/native'
import { Button } from '../../quark'
import { Route, Link } from 'react-router-native'
import { gql, graphql } from 'react-apollo'
import { TabViewAnimated } from 'react-native-tab-view'
import _ from 'lodash'
// local imports
import ItemCard from './ItemCard'
import styles from './styles'

const animationDuration = 150

class CategoryGrid extends React.Component {
    state = {
        showEditor: false,
        modal: {},
        origin: {},
        viewport: {},
    }

    _openEditor(origin) {
        // get the used params
        const { viewport } = this.state

        // shift the origin to accomodate the viewport
        const relOrigin = {
            x: origin.x - 247,
            y: origin.y - 64,
            height: origin.height,
            width: origin.width,
        }

        this.setState({
            showEditor: true,
            origin: relOrigin,
            modal: {
                x: new Animated.Value(relOrigin.x),
                y: new Animated.Value(relOrigin.y),
                width: new Animated.Value(relOrigin.width),
                height: new Animated.Value(relOrigin.height),
            }
        }, () => {
            // we have a few things we need to animate at once
            Animated.parallel([
                Animated.timing(this.state.modal.width, {
                    toValue: this.state.viewport.width,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.modal.height, {
                    toValue: this.state.viewport.height,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.modal.x, {
                    toValue: 0,
                    duration: animationDuration,
                }),
                Animated.timing(this.state.modal.y, {
                    toValue: 0,
                    duration: animationDuration,
                })
            ]).start()
        })
    }

    _closeEditor() {
        // we have a few things we need to animate at once
        Animated.parallel([
            Animated.timing(this.state.modal.width, {
                toValue: this.state.origin.width,
                duration: animationDuration,
            }),
            Animated.timing(this.state.modal.height, {
                toValue: this.state.origin.height,
                duration: animationDuration,
            }),
            Animated.timing(this.state.modal.x, {
                toValue: this.state.origin.x,
                duration: animationDuration,
            }),
            Animated.timing(this.state.modal.y, {
                toValue: this.state.origin.y,
                duration: animationDuration,
            })
        ]).start(() => {
            this.setState({
                showEditor: false,
            })
        })
    }

    _updateViewport() {
        // figure out how big the viewport is
        this._root.measure((_, __, width, height, x, y) => {
            // save the viewport dimensions
            this.setState({
                viewport: {
                    width,
                    height,
                    x,
                    y,
                }
            })
        })
    }

    componentDidMount() {
        // update the notion of the viewport
        setTimeout(this._updateViewport, 0)
    }

    constructor(...args) {
        super(...args)

        // function binds
        this._openEditor = this._openEditor.bind(this)
        this._closeEditor = this._closeEditor.bind(this)
        this._updateViewport = this._updateViewport.bind(this)
    }

    render() {
        const { style, data, ...rest } = this.props

        return (
            <View style={{flex: 1}} ref={ele => this._root = ele}>
                { data.loading ? (
                    <Text>loading...</Text>
                ) : (
                    <TabView
                        data={data.allCategories.map(cat => ({key: cat.name, rows: _.chunk(cat.items, 3)}))}
                        numTabs={6}
                        style={styles.container}
                    >
                        {/* the page for each category */}
                        {({rows, key}) => (
                            <ScrollView style={styles.gridContainer} key={key}>
                                {rows.map((row, rowIdx) => (
                                    <View style={styles.row} key={rowIdx}>
                                        {[
                                            ...row.map(item => (
                                                <ItemCard item={item} key={item.id} style={styles.card} openEditor={this._openEditor}/>
                                            )),
                                            ...Array.apply(null, {length: 3 - row.length}).map(Number.call, Number).map(
                                                (_, i) => (
                                                    <View style={[styles.placeholder, styles.card]} key={`${rowIdx}:${i}`}/>
                                                )
                                            )
                                        ]}
                                    </View>
                                ))}
                            </ScrollView>
                        )}
                    </TabView>
                )}
                {this.state.showEditor && (
                    <Animated.ScrollView
                        style={{
                            width: this.state.modal.width,
                            height: this.state.modal.height,
                            top: this.state.modal.y,
                            left: this.state.modal.x,
                            position: 'absolute',
                            backgroundColor: 'red',
                        }}
                    >
                        <Button onPress={this._closeEditor}>
                            close
                        </Button>
                    </Animated.ScrollView>
                )}
            </View>
        )
    }
}


// the component data requirements
const query = gql`
    query CategoryGrid {
        allCategories(orderBy: name_DESC) {
            id
            name
            items {
                id
                ${ItemCard.fragments.item}
            }
        }
    }
`

export default graphql(query)(CategoryGrid)
