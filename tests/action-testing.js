
import test from 'ava';
import TestUtils from 'react-dom/test-utils';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import should from 'should';
import sinon from 'sinon';


import { CategoryContext, InsightAction } from '../';


class InputAction extends Component {
    
    render() {
        return (<input onClick={this.props.onClick} />);
    }
    
}


test('testing an action creator', t => {
    
    const spy = sinon.spy();
    
    const tree = TestUtils.renderIntoDocument(
        <CategoryContext value="one">
            <CategoryContext value="two">
                <CategoryContext value="three">
                    <InputAction onClick={spy} />
                </CategoryContext>
            </CategoryContext>
        </CategoryContext>
    );
    
    const input = TestUtils.findRenderedComponentWithType(tree, InputAction);
    //TestUtils.Simulate.click(input);
    
    t.true(spy.called);
    
    
    // t.deepEqual(child.context, {
    //     insightCategory: ['one', 'two', 'three']
    // });
    
});