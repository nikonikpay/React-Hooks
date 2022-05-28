import React, { Fragment, useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text,setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';



  return <Fragment>
    <h1>{text || "Johnny"}</h1>
    {text && <h1>Hello world</h1>}
    {!text && <h1>Hello world</h1>}
  </Fragment>;
};

export default ShortCircuit;
