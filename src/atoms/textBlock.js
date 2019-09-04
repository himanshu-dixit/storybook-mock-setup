/*
  Text Component implementation.

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../../other/output.css';
import { deletePropertiesFromObject } from '../helper/utils';

const TextBlock = (props) => {
    let tailWindClass = '';

    const { size, family, weight, color, tailwind, children } = props;
    const propertiesToRemove = ["size", "family", "weight", "color", "children", "tailwind"];

    //Make shallow copy of the object.
    const clonedProps = Object.assign({},props);

    // Define size of the text
    if(size){
        tailWindClass += ` text-${size}`
    }

    // Define family of the text
    if (family) {
        tailWindClass += ` font-${family}`
    }

    // Define weight of the text
    if (weight) {
        tailWindClass += ` font-${weight}`
    }

    // Define color of the text
    if (color) {
        tailWindClass += ` text-${color}`
    }

    // For overriding, defining custom options
    if (tailwind){
        tailWindClass += ` ${tailwind}`;
    }

    tailWindClass = tailWindClass.trim(); //Remove white space from starting

    // Remove all defined property from shallowCopy
    deletePropertiesFromObject(clonedProps, propertiesToRemove);

    return (
        <p className={tailWindClass} {...clonedProps}>
            {children}
        </p>
    )

}

TextBlock.defaultProps = {
    family: 'content',
    size: 2,
    weight: 'normal',
    color: 'black'
}

TextBlock.propTypes = {
    children: PropTypes.element,
    /** Size of the text block */
    size: PropTypes.string,
    /** Family of the text block */
    family: PropTypes.string,
    /** Weight of the text block */
    weight: PropTypes.string,
    /** Color of the text block */
    color: PropTypes.string,
    /** Additional tailwind for text block */
    tailwind: PropTypes.string,
}

export default TextBlock;