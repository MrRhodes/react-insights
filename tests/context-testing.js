
import test from 'ava';
import TestUtils from 'react-dom/test-utils';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import should from 'should';

import { CategoryContext, InsightAction } from '../';


class Child extends Component {
    static contextTypes = {
        insightCategory: PropTypes.array.isRequired
    }
    render() {
        return <div />
    }
}


test('testing context single level', t => {
    
    const tree = TestUtils.renderIntoDocument(
        <CategoryContext value="one">
            <Child />
        </CategoryContext>
    );
    
    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    
    t.deepEqual(child.context, {
        insightCategory: ['one']
    });
    
});



test('testing context multi level', t => {
    
    const tree = TestUtils.renderIntoDocument(
        <CategoryContext value="one">
            <CategoryContext value="two">
                <CategoryContext value="three">
                    <Child />
                </CategoryContext>
            </CategoryContext>
        </CategoryContext>
    );
    
    const child = TestUtils.findRenderedComponentWithType(tree, Child)
    
    t.deepEqual(child.context, {
        insightCategory: ['one', 'two', 'three']
    });
    
});