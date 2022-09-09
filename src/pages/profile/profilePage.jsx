import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate('/tasks')}>Go Tasks</button>
        </div>
    )
}

export default ProfilePage
