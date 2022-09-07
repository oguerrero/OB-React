import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {
    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault()
        console.log(nameRef.current.value)
        update(nameRef.current.value)
    }

    return (
        <div style={{ background: 'cyan', padding: '20px' }}>
            <p onMouseOver={() => console.log('>> On mouse over')}>
                Hello: {name}
            </p>
            <button onClick={() => console.log('>> Pressed button 1')}>
                Button 1
            </button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams('a')}>Button 3</button>
            <input
                placeholder='Text'
                onFocus={console.log('>> Input Focus')}
                onChange={(e) => console.log('>> onChange', e.target.value)}
                onCopy={() => console.log('>> Copied text from input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef)}    >Send Message</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input placeholder='New Name' ref={nameRef} />
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    )
}

export default Child
