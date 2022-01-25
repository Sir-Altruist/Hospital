import React from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Box, Grid, Container, Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { doctorData  } from '../../components/dashboard/tableData';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Chart from '../../components/dashboard/Chart';
import BarChart from '../../components/dashboard/BarChart';
import './dashboard.css'


// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Dashboard = () => {

  return (
    <Box component='div'>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3} sx={{ mb: 3}}>
            <Card className='dash-card'>
              <CardContent>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
                <PersonIcon fontSize='large' />
                <Typography variant='h5' sx={{ pl: 2, pt: .5}}>Patient</Typography>
                </div>
                <Typography variant='h3' align='center' sx={{ fontWeight: 'bold', pt: 5}}>200</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={3}  sx={{ mb: 3}}>
          <Card className='dash-card'>
              <CardContent>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
                <EqualizerIcon fontSize='large' />
                <Typography variant='h5' sx={{ pl: 2, pt: .5}}>Report</Typography>
                </div>
                <Typography variant='h3' align='center' sx={{ fontWeight: 'bold', pt: 5}}>120</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={3}>
          <Card className='dash-card'>
              <CardContent>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
                <VolunteerActivismIcon fontSize='large' />
                <Typography variant='h5' sx={{ pl: 2, pt: .5}}>Consultation</Typography>
                </div>
                <Typography variant='h3' align='center' sx={{ fontWeight: 'bold', pt: 5}}>250</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      <Grid container sx={{mt: 5}}>
      <Grid item xs={12} md={6}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctorData.map(row=> (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={5}>
        <Chart />
      </Grid>
      </Grid>
      <Grid container sx={{ margin: '5rem 0'}}>
      <BarChart />
      </Grid>
      </Container>
    </Box>
  )
  
};


export default Dashboard;
