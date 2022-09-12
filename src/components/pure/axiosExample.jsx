import React, { useEffect, useState } from 'react'
import getRandomUser from '../services/axiosService'

const AxiosExample = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getRandomUser()
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setUser(response.data.results)
                }
            })
            .catch((error) => alert(error))
    }, [])

    return (
        <div>
            <h1>Axios Example</h1>
            {user != null ? (
                <div>
                    <h2>{user.title}</h2>
                </div>
            ) : (
                <p>Generate a new user</p>
            )}
            <h2></h2>
        </div>
    )
}

export default AxiosExample
