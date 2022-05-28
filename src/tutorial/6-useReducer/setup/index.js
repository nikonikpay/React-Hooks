import React, { useState, useReducer, Fragment } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
const reducer= (state,action)=>{
    return state;
}
const defaultState = {
    people:data,
    isModalOpen:true,
    modalContent:"hello world"
}
const Index = () => {
    const [ name, setName ] = useState( '' )
    const [state,dispatch] = useReducer(reducer,defaultState)

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( name ) {
dispatch({type:'TESTING'})
        }
        else {

        }
    };

    return <Fragment>
        { state.isModalOpen && <Modal modalContent={state.modalContent}/> }
        <form action="" onSubmit={ handleSubmit } className="form">
            <div>
                <input type="text" value={ name } onChange={ ( e ) => setName( e.target.value ) }/>
            </div>
            <button type="submit">add</button>
        </form>

        {state.people.map((person) =>{
            return <div key={person.id}>
                <h4>{ person.name }</h4>
            </div>
        } )}

    </Fragment>
};

export default Index;
