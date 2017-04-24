
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InsightAction = WrappedComponent => {
    
    class InsightComponent extends Component {
        
        static contextTypes  = {
            insightCategory: PropTypes.array,
        }
        
        render() {
            
            const { insightCategory } = this.context;
            let insightCategoryPath = '';
            
            if (insightCategory && insightCategory.join) {
                insightCategoryPath = insightCategory.join('_');
            }
            
            console.log(insightCategoryPath);
            
            // const newProps = { 
            //     ...this.props,
            //     onClick
            // }
            
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
    
    return InsightAction;
    
}

export default InsightAction;
