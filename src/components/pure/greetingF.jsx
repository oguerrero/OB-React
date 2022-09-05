import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {
    // Introduccion useState
    // const [variable, metodo para actualizar] = useState(valor inical)
    const [age, setAge] = useState(23)

    const birthday = () => {
        // actualizar el state
        setAge(age + 1)
    }
    return (
        <div>
            <h1>Hola {props.name} desde componente Funcional</h1>
            <h2>Tu edad es de: {age}</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF
