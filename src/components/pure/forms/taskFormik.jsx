import React, { useRef } from 'react'

// NPM
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// MODELS
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskFormik = ({ add }) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const initialTask = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }
    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name is too short')
            .max(25, 'Name too long')
            .required('Name is Required'),
        description: Yup.string()
            .min(3, 'Name is too short')
            .max(25, 'Name too long')
            .required('Name is Required')
    })


    // Send data
    function addTask() {
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }
    return (
        <Formik
            // Initial Data
            initialValues={initialTask}
            // YUP validation Schema
            validationSchema={taskSchema}
            // onSubmit Event
            onSubmit={addTask}>
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    {/* Task Name */}
                    <label htmlFor='name' className='sr-only'>
                        Task Name
                    </label>
                    <Field
                        id='name'
                        name='name'
                        placeholder='Task Name'
                        type='text'
                        innerRef={nameRef}
                        className='form-control form-control-lg'
                    />
                    {/* Task name Errors */}
                    {errors.name && touched && (
                        <ErrorMessage component='div' name='name' />
                    )}
                    {/* Task Description */}
                    <label htmlFor='description' className='sr-only'>
                        Task description
                    </label>
                    <Field
                        id='description'
                        name='description'
                        placeholder='Task description'
                        type='text'
                        innerRef={descriptionRef}
                        className='form-control form-control-lg'
                    />
                    {/* Task Description Errors */}
                    {errors.description && touched && (
                        <ErrorMessage component='div' name='description' />
                    )}
                    {/* Level */}
                    <label htmlFor='selectLevel' className='sr-only'>
                        Priority
                    </label>
                    <Field
                        as='select'
                        id='level'
                        name='level'
                        innerRef={levelRef}
                        >
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                    {/* Level erros */}
                    {errors.level && touched && (
                        <ErrorMessage component='div' name='level' />
                    )}
                    <button type='submit'>Submit</button>
                    {isSubmitting ? <p>Creating Task</p> : null}
                </Form>
            )}
        </Formik>
    )
}

export default TaskFormik
