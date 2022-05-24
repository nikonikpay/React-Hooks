import React, { useState, useEffect, Fragment } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value,setValue] = useState(0)
    if ( value>0 ){

    }
    useEffect( () => {
        console.log( "call use effect" )
        if ( value>1 ){
            document.title = `New Message(${value})`
        }

    } )
    console.log( "render component" )
    return <Fragment>
        <h1>{value}</h1>
        <button className={"btn"} onClick={()=>setValue(value+1)}>Click me</button>
    </Fragment>
};

export default UseEffectBasics;
