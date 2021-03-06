import React, { useState } from 'react';

const UseStateBasics = () => {
    console.log( useState() )

    const [ text, setText ] = useState( "title" )


    const handleClick = () => {

        if ( text === 'title' ) {
            setText( 'hello world' )
        }
        else {
            setText( 'title' )
        }

    }

    return <React.Fragment>
        <h1>{ text }</h1>
        <button className="btn " onClick={ handleClick }>Change Title</button>


    </React.Fragment>;
};

export default UseStateBasics;
