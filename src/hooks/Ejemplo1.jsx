/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y, ademas, poder modificarlo
 */

import React, { useState } from 'react'

const Ejemplo1 = () => {
    // Valor inical para un contador
    const valorInicial = 0

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Oscar',
        email: 'oguerrero@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente
     * para así poder gestionar su cambio y que éste se vea reflejado en la vista del componente.
     *
     * const [nombreVariable, funcion] = useState(valorIniical)
     */
    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionCambiarValor(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado privado que contiene la persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Enrique',
            email: 'oguerrero2@gmail.com'
        })
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    )
}

export default Ejemplo1
