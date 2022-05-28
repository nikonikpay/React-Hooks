import React, { useState, useEffect, Fragment } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

    const [ size, setSize ] = useState( window.innerWidth )

    const checkSize = () => {
        setSize( window.innerWidth )
    };

    useEffect( () => {
        console.log("Use eefect")
        window.addEventListener( 'resize', checkSize )
        return () =>{
            console.log("clean up")
            window.removeEventListener( 'resize', checkSize )
        }
    } )
    console.log("render")
    return <Fragment>
        <h1>windows</h1>
        <h2>{ size } PX</h2>

    </Fragment>
};

export default UseEffectCleanup;
