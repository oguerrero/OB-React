import React, { useEffect, useState } from 'react'
import {
    getAllPagedUsers,
    getAllUsers,
    getUserDetails,
    login
} from '../../services/fetchService'

const FetchExample = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [totalUsers, setTotalUsers] = useState(12)
    const [usersPerpage, setUsersPerpage] = useState(6)
    const [pages, setPages] = useState(2)

    useEffect(() => {
        obtainUsers()
    }, [])

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users', response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerpage(response.per_page)
            })
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(() => {
                console.log('Endend obtaining users')
                console.table(users)
            })
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All paged users', response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerpage(response.per_page)
            })
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(() => {
                console.log('Endend obtaining users')
                console.table(users)
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('All user details', response.data)
                setUser(response.data)
            })
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(() => {
                console.log('Endend obtaining users')
                console.table(users)
            })
    }
    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token)
                sessionStorage.setItem('token', response.token)
            })
            .catch((error) => alert(`Something went wrong ${error}`))
            .finally(() => {
                console.log('Endend login users')
                console.table(users)
            })
    }

    return (
        <div>
            <button onClick={authUser}>Login</button>
            <h2>Users:</h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name}
                    {user.last_name}
                </p>
            ))}
            <p>
                Showing {usersPerpage} of {totalUsers} in total
            </p>
            <button onClick={() => obtainPageUsers(1)}>1</button>
            <button onClick={() => obtainPageUsers(2)}>2</button>
            {user != null ? (
                <div>
                    <h3>User details</h3>
                    <p>Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Email: {user.email}</p>
                    <img
                        src={user.avatar}
                        style={{ height: '150px', width: '150px' }}
                        alt=''
                    />
                </div>
            ) : (
                <h3>Select a user to see its details</h3>
            )}
        </div>
    )
}

export default FetchExample
