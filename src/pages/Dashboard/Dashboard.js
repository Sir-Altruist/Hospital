import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const Dashboard = () => {
  return <div style={{ textAlign: 'center', paddingTop: '10rem'}}>
    <h1 sx={{ textAlign: 'center', paddingTop: '10rem'}}>Upload Document</h1>

    <input 
    accept='files/*'
    id='raised-button-file'
    multiple
    type='file'
    hidden
    />
    <label htmlFor='raised-button-file'>
    <CloudDownloadIcon color='primary' sx={{ fontSize: '10rem'}} />
    </label>
  </div>;
};

export default Dashboard;
