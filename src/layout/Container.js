/*
  Text Component implementation.

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../../other/output.css';
import { deletePropertiesFromObject, isDefined } from '../helper/utils';
var classNames = require('classnames');

const Container = (props) => {

    const { type, maxWidth, tailwind, children, direction, wrap } = props;
    const propertiesToRemove = ["type", "maxWidth", "children", "tailwind"];

    //Make shallow copy of the object.
    const clonedProps = Object.assign({}, props);

    // Generate class names for the div
    let tailWindClass = classNames({
        [`flex`]: type==="flex",
        [`grid`]: type === "grid",
        [`flex-${direction}`]: isDefined(direction) && type==="flex",
        [`flex-${wrap}`]: isDefined(wrap) && type === "flex",
        [`max-width-1200`]: maxWidth=="1200",
        [`${tailwind}`]: isDefined(tailwind),
    });

    // Remove all defined property from shallowCopy
    deletePropertiesFromObject(clonedProps, propertiesToRemove);

    return (
        <div className={tailWindClass} {...clonedProps}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    family: 'content',
    size: 2,
    weight: 'normal',
    color: 'black'
}

Container.propTypes = {
    /** Type of Container */
    type: PropTypes.string,
    /** Size of the text block */
    maxWidth: PropTypes.bool,
    direction: PropTypes.string,
    wrap: PropTypes.string,
    gap: PropTypes.string,
    tailwind: PropTypes.string,
}

export default Container;