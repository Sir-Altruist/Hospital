import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
  LineElement,
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
        text: 'Line Graph',
        fontSize: 50
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October"];

  const data = {
      labels,
      datasets: [
          {
            label: 'Surgery',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132, 0.5)',
            data: [10, 20, 30, 40, 30, 20, 15, 40, 45, 50],
      },
      {
        label: 'Consultation',
        backgroundColor: 'rgb(53, 162, 235)',
        borderColor: 'rgba(53, 162, 235, 0.5)',
        data: [50, 45, 40, 15, 20, 30, 40, 30, 20, 10],
  },

    ]
  }

const ChartCom = () => {
        
    return (
        <Line data={data} options={options}/>
            
    )
}

export default ChartCom
