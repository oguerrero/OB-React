import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

// Import custom css
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {
    const defaultTask1 = new Task(
        'Example1',
        'Default description1',
        true,
        LEVELS.NORMAL
    )

    const defaultTask2 = new Task(
        'Example2',
        'Default description2',
        false,
        LEVELS.URGENT
    )

    const defaultTask3 = new Task(
        'Example3',
        'Default description3',
        true,
        LEVELS.BLOCKING
    )
    // Estado del componente
    const [tasks, setTasks] = useState([
        defaultTask1,
        defaultTask2,
        defaultTask3
    ])
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
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm />
                </div>
            </div>
        </div>
    )
}

export default TaskListComponent
