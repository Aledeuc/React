import React  from 'react'
import './Button.css'

const Button = ({ vieillir, combien }) => (
    <button className="buttonVieillir" onClick={vieillir}>
        Vieillir de {combien} ans
    </button>
)

export default Button
