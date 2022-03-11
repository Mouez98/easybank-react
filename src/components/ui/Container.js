import React from 'react';

import '../../index.css'

const Container = (props) => {
    return <div className={`container ${props.className? props.className : ''}`}>{props.children}</div>
}

export default Container;