'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, cn } from '../styles';

const viewClassName = cn(StyleSheet.create({
    view: {
        display: 'flex',
        flexShrink: 0,
        boxSizing: 'border-box'
    }
}).view);

export default class View extends Component {
    static propTypes = {
        styles: PropTypes.array
    };

    render() {
        const { styles = [], children, className, ...rest } = this.props;
        const extraClassName = styles &&  styles.length ? ` ${cn(...styles)}` : '';

        return (
            <div
                {...rest}
                className={viewClassName + extraClassName + (className ? ` ${className}` : '')}>
                {children}
            </div>
        )
    }
}