import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
  BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patients',
        fontSize: 50
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October"];

  const data = {
      labels,
      datasets: [
          {
            label: 'Patients Attendance',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: 'rgb(255, 99, 132, 0.5)',
            data: [ 200, 150, 170, 290, 300, 500, 400, 180, 250, 300],
      }

    ]
  }

const BarChart = () => {
        
    return (
        <Bar data={data} options={options}/>
            
    )
}

export default BarChart
