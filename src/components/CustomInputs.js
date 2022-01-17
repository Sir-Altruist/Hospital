import React from 'react'
import { TextField } from '@mui/material'

function CustomInputs(props) {
    return (
        <>
        <TextField variant='outlined' fullWidth size='small' {...props.input} {...props} />
        {props.meta.touched && props.meta.error && (
            <div style={{color: 'red'}}>
                <small>{props.meta.error}</small>
            </div>
        )}   
        </>
    )
}

// function SelectInput({
//     input: { name, value, onChange, ...restInput }, 
//     meta,
//     formControlProps,
//     ...rest
// }) {
//     const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
//     meta.touched
//     return (
//         <FormControl
//         {...formControlProps}
//         error={ showError }
//         style={{
//             minWidth: '100%'
//         }}>
//             <Select
//             {...rest}
//             // multiple
//             name={name}
//             onChange={onChange} 
//             value={value || []}
//             inputProps={restInput}
//             >
//             <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value='category 1'>Category 1</MenuItem>
//           <MenuItem value='category 2'>Category 2</MenuItem>
//           <MenuItem value='category 3'>Category 3</MenuItem>
//             </Select>
//             {showError && (
//                 <FormHelperText>{meta.error || meta.submitError}</FormHelperText>
//             )}
//         </FormControl>
//     )
// }


export default CustomInputs