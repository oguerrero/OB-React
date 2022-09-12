import React, { useState } from 'react'
import { getNumbers } from '../services/observableService'

const ObservableExample = () => {
    const [number, setNumber] = useState(0)

    console.log('Subscription to Observable')
    const obtainNewNumbers = () => {
        getNumbers.subscribe({
            next(newNumber) {
                console.log('New Number:', newNumber)
                setNumber(newNumber)
            },
            error(error) {
                alert(`Something went wrong ${error}`)
                console.log(error)
            },
            complete() {
                alert(`Finished with ${number}`)
                console.log('Done observable')
            }
        })
    }
    console.log('Finished receiving numbers')

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain Numbers</button>
        </div>
    )
}

export default ObservableExample
