import React, { Fragment } from 'react'

// components dite stateless, qui n'a pas de state
// const Membre = () => {
//     return (
//         <h2>Membre de ma famille : nom</h2>
//     )
// }

const Membre = ({ name, age, children }) => {

    return (
        <Fragment>
            <h2 style={{ 
                backgroundColor: age < 20 ? 'purple' :'#bada55', 
                padding: '8px',
                color: 'white' }}> 
                { name } : { age }
            </h2>
            { children ? <p>{ children }</p> : <Fragment />}
           
        </Fragment>
    )
}
export default Membre