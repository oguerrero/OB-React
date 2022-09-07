import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

// Import task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task])

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* TODO: Crear badge */}
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
            {/* TODO: Sustituir por icons */}
                <span>{task.completed}</span>
            </td>
        </tr>
    )
    {
        /* <div>
            <h2 className='task-name'>Nombre: {task.name}</h2>
            <h3>Descripcion: {task.description}</h3>
            <h4>Nivel de la tarea: {task.level}</h4>
            <h5>Completado: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
        </div> */
    }
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
