/*
  Text Component implementation.

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../../other/output.css';
import { deletePropertiesFromObject } from '../helper/utils';

const text = (props) => {
    let tailWindClass = '';

    const { size, family, weight, color, tailwind, children } = props;
    const propertiesToRemove = [size, family, weight, color, tailwind, children];

    //Make shallow copy of the object.
    const clonedProps = Object.assign({},props);

    // Define size of the text
    if(size){
        tailWindClass += ` text-${size}`
    }

    // Define family of the text
    if (family) {
        tailWindClass += ` text-${family}`
    }

    // Define weight of the text
    if (weight) {
        tailWindClass += ` text-${weight}`
    }

    // Define color of the text
    if (color) {
        tailWindClass += ` text-${color}`
    }

    // For overriding, defining custom options
    if (tailwind){
        tailWindClass += ' ${tailwind}';
    }

    // Remove all defined property from shallowCopy
    deletePropertiesFromObject(clonedProps, propertiesToRemove);

    return (
        <p className={tailWindClass} {...clonedProps}>
            {children}
        </p>
    )

}

text.propTypes = {
    children: PropTypes.element,
    size: PropTypes.string,
    family: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    tailwind: PropTypes.string,
}

text.defaultProps = {

};
