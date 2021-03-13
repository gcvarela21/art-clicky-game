import React, { useState } from 'react';
import './ImgBlock.css';
/// this is the img card repeating element
function ImgBlock(props) {
    //component always has a return() and Render()
    return (

        <div className='col-3 d-flex-content-center'>
            <img id={props.id} src={props.url} onClick={() => props.handleClick(props.id, props.clicked)} />
        </div>
    )
};
export default ImgBlock;