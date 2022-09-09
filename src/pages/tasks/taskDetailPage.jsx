import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {

    let params = useParams();
    return (
        <div>
            <h1>Task detail {params.id}</h1>
        </div>
    )
}

export default TaskDetailPage
