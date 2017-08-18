import React, { PropTypes } from 'react';

/**
 * Base class for form component.
 * It helps you to defind normalized dispatch functions.
 */
class FormContainer extends React.Component {
    /**
     * Normalize parameters
     * @param  {object} obj
     * @return {object}     A normalized parameter {params: {...state, ...obj}}
     */
    getFormData(obj) {
        const params = {
            ...this.state,
            ...obj
        }
        return {
            params
        };
    }
}

export default FormContainer;
