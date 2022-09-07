import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

// Import custom css
import '../../styles/task.scss'

const TaskListComponent = () => {
    const defaultTask = new Task(
        'example',
        'default description',
        false,
        LEVELS.NORMAL
    )
    // Estado del componente
    const [tasks, setTasks] = useState(defaultTask)
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('Task list component is going to unmount...')
        }
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de tareas')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card body */}
                    <div
                        className='card-body'
                        data-mdb-perfect-scrollbar='true'
                        style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            {/* TODO: Interar sobre lista de tareas */}
                            <tbody>
                                <TaskComponent task={defaultTask} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskListComponent
