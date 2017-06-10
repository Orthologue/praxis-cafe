// external imports
import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-addons-test-utils'
// local imports
import TextInput from '.'
import { Button } from '../../buttons'

describe('Form', () => {
    describe('TextInput', () => {
        test('mounts a placeholder without content', () => {
            // mount an input to test
            const wrapper = renderer.create(
                <TextInput />
            ).toJSON()

            expect(wrapper).toMatchSnapshot()
        })

        test('renders content', () => {
            // mount an input to test
            const wrapper = renderer.create(
                <TextInput>
                    hello
                </TextInput>
            ).toJSON()

            expect(wrapper).toMatchSnapshot()
        })
    })
})
