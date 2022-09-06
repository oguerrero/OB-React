/**
 * Ejemplo de uso del metodo WillUnmount de ciclo de vida en componente
 * clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparesca')
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        // nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparesca')
        }
    })
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    )
}
