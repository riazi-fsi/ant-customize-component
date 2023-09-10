import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export default function RaisedButton({ label, disabled, id, onClick, icon, type, children, style, className, shape, block }) {
    return (
        <Button
            id={id}
            disabled={disabled}
            onClick={onClick}
            icon={icon}
            type={type}
            style={style}
            classNames={className}
            shape={shape}
            block={block}
        >
            {label}
            {children}
        </Button>
    )
}

RaisedButton.propTypes = {

    disabled: PropTypes.bool,
    icon: PropTypes.object,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    shape:  PropTypes.oneOf(['circle', 'round','default']),
    style: PropTypes.object
};
// change icon property 
