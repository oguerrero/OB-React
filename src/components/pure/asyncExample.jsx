import React from 'react'

const AsyncExample = () => {
    async function generateNumber() {
        return Math.floor(Math.random() * 100)
    }

    async function obtainNumber() {
        generateNumber()
            .then((response) => alert(`response ${response}`))
            .catch((error) => alert(`Something went wtrong${error}`))
    }

    async function generatePromiseNumber() {
        return Promise.resolve
    }

    async function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`response ${response}`))
            .catch((error) => alert(`Something went wtrong${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Oscar')
            .then((response) => {
                let value = response
                alert(`Saved name: ${value}`)
            })
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(() => console.log('showStorage finished'))
    }

    async function obatinMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world after 2 seg'), 2000)
        })
        let message = await promise

        await alert(`Message received: ${message}`)
    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is ok: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert(`consumed error`))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('http://invalidUrld')
            alert(`response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Somethin went wrong with the url ${error}`)
        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all([
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2')
        ]).catch((error) => alert(`Something went wrong with the URLs ${error}`))
    }

    return (
        <div>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name</button>
            <button onClick={obatinMessage}>Obtain Message</button>
            <button onClick={consumeError}>Consume Error</button>
            <button onClick={urlNotFound}>Bad Request to Url</button>
            <button onClick={multiplePromise}>Bad Requests to Urls</button>
        </div>
    )
}

export default AsyncExample
