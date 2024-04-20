import React,{useEffect} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import './Chart.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart() {
    const labels =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    useEffect(() => { 
      Aos.init({
        duration: 1000,
        disable: window.innerWidth < 800
      })
    })
    return (
    <div className='hidden md:w-[1100px] mx-auto chart overflow-hidden' data-aos="fade-up">
       <div class="container headings w-[1100px] mx-auto p-[20px] md:mb-[50px]">
          <h1 class="font-weight-bold">Productivity Graph</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
         </div>
         <div className='node'>
     <Line
     data = {{
     labels,
     datasets: [
       {
         label: 'Dataset 1',
         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
         borderColor: '#010854',
         backgroundColor: '#010854',
         tension:0.5,
         borderwidth:3,
       },
       {
         label: 'Dataset 2',
         data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
         borderColor: 'rgba(53, 162, 235, 0.5)',
         backgroundColor: 'rgba(53, 162, 235, 0.5)',
         tension:0.5,
         borderwidth:3
       },
     ],   
}}

options = {{
    responsive: true,
    plugins: {
      legend: {
        position:"right",
       align:'center'
      },
      title: {
        display: true,
      },
    },
    scales:{
        x:{
            grid:{
                display:false,
            },
            title:{
                display:true,
                text:"Data in Months",
                font:{size:20}
            }
        },
        y:{
            grid:{
                display:false,
            },
            title:{
                display:true,
                text:"Data in (k)",
                font:{size:20}
            }
        }
    }
  }}
     />
     </div>
    </div>
  )
}
