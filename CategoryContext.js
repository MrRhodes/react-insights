
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class CategoryContext extends Component {
    
    static contextTypes  = {
        insightCategory: PropTypes.array
    }
    
    getChildContext() {
        const { value } = this.props;
        const { insightCategory } = this.context;
        
        return {
            insightCategory: insightCategory ? insightCategory.concat(value) : [value]
        }
        
    }
  
    render() {
        return Children.only(this.props.children);
    }
    
}

CategoryContext.propTypes = {
    value: PropTypes.string.isRequired,
}
    
CategoryContext.childContextTypes = {
    insightCategory: PropTypes.array.isRequired
}

export default CategoryContext;

