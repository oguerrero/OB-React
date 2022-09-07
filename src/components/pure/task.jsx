import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

// Import task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task])

    /**
     * Funtion that returns a badge depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-info'>{task.level}</span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                )
            default:
                break
        }
    }

    /**
     * Function that returns icon depending on completion of the task
     * @returns icons
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return <i className='bi-toggle2-on' style={{ color: 'green' }}></i>
        }
        return <i className='bi-toggle2-off' style={{ color: 'gray' }}></i>
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Funtion for badge element depending on task.level */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Function for icon depending on task.completed */}
                {taskCompletedIcon()}
                <i className='bi-trash' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
