import React from 'react';
import { 
    dentalDoctors, 
    familyDoctors, 
    internalDoctors, 
    surgeryDoctors, 
    xrayDoctors, 
    labDoctors, 
    paedDoctors 
  } from './doctorsList' ;
  import { MenuItem } from '@mui/material'

const Dental = () => {
  return <div>
      {dentalDoctors.map((doctor, i) => {
        return (
          <MenuItem value={doctor.name} key={i}>{doctor.name}</MenuItem>
        )
      })}
  </div>;
};

export default Dental;
