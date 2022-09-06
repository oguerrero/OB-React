/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react'

/**
 *
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

// Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            <Componente2 />
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesión es: {state.session}</h2>
        </div>
    )
}

const ComponenteConContexto = () => {
    const estadoInicial = {
        token: '12345',
        session: 1
    }

    // Creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData({
            token: 'JWT123456789',
            session: sessionData.session + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
            {/* Ademas si se actualiza, los componentes de aqui, tambien lo actualizan */}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}

export default ComponenteConContexto
