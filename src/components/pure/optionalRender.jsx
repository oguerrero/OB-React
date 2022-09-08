import React, { useState } from 'react'

// Button Styles
const loggedStyle = {
    background: 'slateblue',
    color: 'white',
    fontWeight: 'bold',
    border: 0,
    padding: '10px 15px',
    borderRadius: '20px'
}

const unLoggedStyle = {
    background: 'tomato',
    color: 'white',
    fontWeight: 'bold',
    border: 0,
    padding: '10px 15px',
    borderRadius: '20px'
}

// Login Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button onClick={loginAction} style={propStyle}>
            Login
        </button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button onClick={logoutAction} style={propStyle}>
            Logout
        </button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion

const OptionalRender = () => {
    const [access, setAccess] = useState(true)
    const [nMessages, setNMessages] = useState(0)

    const updateAccess = () => {
        setAccess(!access)
    }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let opionalButton

    /* if (access) opionalButton = <button onClick={updateAccess}>Logout< /button>
     else opionalButton = <button onClick={updateAccess}>Login</button> */

    if (access)
        opionalButton = (
            <LogoutButton
                propStyle={unLoggedStyle}
                logoutAction={logoutAction}
            />
        )
    else
        opionalButton = (
            <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
        )

    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Login Button */}
            {opionalButton}
            {/* {nMessages === 0 && <p>You have no new Messages...</p>}
            {nMessages === 1 && <p>You have 1 new Message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new Messages...</p>} */}
            {/* Con operador ternario */}
            {access && (
                <div>
                    {nMessages === 0 ? (
                        <p>You have no new Messages...</p>
                    ) : nMessages === 1 ? (
                        <p>You have 1 new Message...</p>
                    ) : (
                        <p>You have {nMessages} new Messages...</p>
                    )}
                    <button onClick={addMessages}>Add a new Message</button>
                </div>
            )}
        </div>
    )
}

export default OptionalRender
