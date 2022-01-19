import React from 'react'
import { TableCell, TableRow } from '@mui/material'

const Data = ({ info }) => {
    return (
        <div sx={{ minWidth: '50%'}}>
            <TableRow>
            <TableCell>{info.name}</TableCell>
            <TableCell>{info.check}</TableCell>
            </TableRow>
        </div>
    )
}

export default Data
