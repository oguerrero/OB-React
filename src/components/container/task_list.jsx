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
    const [loading, setLoading] = useState(true);

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
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar la lista de tareas*/}
            <TaskComponent task={defaultTask} />
        </div>
    )
}

export default TaskListComponent
