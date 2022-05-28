import React, { Fragment, useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


const ControlledInputs = () => {
    const [ firstName, setFirstName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ people, setPeople ] = useState( [] )
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( firstName && email ) {
            const person = {id: new Date().getTime().toString(), firstName, email }
            console.log(person)
            setPeople( ( people ) => {
                return [ ...people, person ]
            } )
            setFirstName( '' )
            setEmail( '' )
        }
        else {
            console.log( 'empty value' )
        }

    };

    return <Fragment>
        <article>
            <form className={ "form" }>
                <div className="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input type="text" id={ "firstName" } name={ "firstName" } value={ firstName }
                           onChange={ ( e ) => setFirstName( e.target.value ) }/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">email:</label>
                    <input type="text" id={ "email" } name={ "email" } value={ email }
                           onChange={ ( e ) => setEmail( e.target.value ) }/>
                </div>
                <button type={ "submit" } onClick={ handleSubmit }>add person</button>
            </form>
            {
                people.map( ( person, index ) => {
                    const { id, firstName, email } = person
                    return <div key={ id } className={ "item" }>
                        <h4>{ firstName }</h4>
                        <p>{ email }</p>
                    </div>
                } )
            }
        </article>
    </Fragment>
};

export default ControlledInputs;
