/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {
    // Crear 2 contadores distintos en estados diferentes
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    // Crear referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect
     */
    /**
     * ? CASO 1: Ejecutar siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
     */
    /* useEffect(() => {
        console.log('Cambio en el estado del componente')   
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef)
    }) */

    /**
     * ? CASO 2: Ejecutar solo cuando cambie contador1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador 2, no habra ejecucion
     */

    /* useEffect(() => {
        console.log('Cambio en el estado del contador 1')
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef)
    }, [contador1]) */

    /**
     * ? CASO 3: Ejecutar solo cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */
     useEffect(() => {
        console.log('Cambio en el estado del contador 1')
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef)
    }, [contador1, contador2])

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento Referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento Referenciado</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementar1}>Incrementar Contador 1</button>
            <button onClick={incrementar2}>Incrementar Contador 2</button>
        </div>
    )
}

export default Ejemplo2
