import React from 'react';
import { Box, Typography } from '@mui/material'

const Team = ({ member }) => {
  return (
  <Box component='div'>
      <img src={member.img} alt='member' />
      <Typography variant='h6' sx={{ fontWeight: 'bold', pt: 3}}>{member.name}</Typography>
      <Typography variant='body2' sx={{ pt: 1}} color='textSecondary'>{member.office}</Typography>
  </Box>
  );
};

export default Team;
