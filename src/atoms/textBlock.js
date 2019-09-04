/*
  Text Component implementation.

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../../other/output.css';
import { deletePropertiesFromObject, isDefined } from '../helper/utils';
import { isUndefined } from 'util';
var classNames = require('classnames');

const TextBlock = (props) => {

    const { size, family, weight, color, tailwind, children } = props;
    const propertiesToRemove = ["size", "family", "weight", "color", "children", "tailwind"];

    //Make shallow copy of the object.
    const clonedProps = Object.assign({},props);
    
    // Generate class names for the div
    let tailWindClass = classNames({ 
        [`font-${family}`]: isDefined(family),
        [`font-${weight}`]: isDefined(weight),
        [`text-${color}`]: isDefined(color),
        [`text-${size}`]: isDefined(size),
        [`${tailwind}`]: isDefined(tailwind),
    });
       
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