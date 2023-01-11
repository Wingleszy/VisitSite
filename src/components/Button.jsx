import React from 'react';
import Icon from '@mdi/react'

const Button = (props) => {
    const { name, bcolor, url, path } = props
    return (
        <a href={url} target="_blank" rel='noreferrer' className={`btn btn-url ${bcolor}`}>
            {name}
            <Icon path={path}
                size={2}
                horizontal
                vertical
                rotate={180}
                color="white" 
                style={{marginLeft: "10px"}}
                />
        </a>
    );
};

export default Button;