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

const ContainerItem = (props) => {

    const { type, width, tailwind, children } = props;
    const propertiesToRemove = ["type", "width", "children", "tailwind"];

    //Make shallow copy of the object.
    const clonedProps = Object.assign({}, props);

    // Generate class names for the div
    let tailWindClass = classNames({
        [`flex`]: type === "flex-item",
        [`grid`]: type === "grid-item",
        [`w-${width}`]: isDefined(width) && type === "flex-item",
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

ContainerItem.defaultProps = {
    family: 'content',
    size: 2,
    weight: 'normal',
    color: 'black'
}

ContainerItem.propTypes = {
    /** Type of Container */
    type: PropTypes.string,
    /** Size of the text block */
    maxWidth: PropTypes.bool,
    width: PropTypes.string,
    //Support To Be Added
    gap: PropTypes.string,
    tailwind: PropTypes.string,
}

export default ContainerItem;