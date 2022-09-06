/**
 * Ejemplo de componente de tipo clase de los metodos de ciclo de vida
 */

import React, { Component } from 'react'

export default class lifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Componente Instanciado')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log(
            'DIDMOUNT:Justo al acabar del montaje del componente antes de renderizarlo'
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actuzalizarse
         */
        // retrun true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('WILLUPDATE: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    }

    render() {
        return <div>lifeCycleExample</div>
    }
}
