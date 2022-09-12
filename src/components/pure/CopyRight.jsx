import React from 'react'

// Material UI Components
import { Link, Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright'

const CopyRight = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            <span>
                <p>Copyright</p>
                <CopyrightIcon color='inherit' />
            </span>
            <Link color='inherit' href='https:google.com'>
                Google
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default CopyRight
