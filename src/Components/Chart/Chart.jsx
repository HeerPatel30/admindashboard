import React from 'react'
import '../Chart/Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
  const data = [
    {
      name: 'Jan',
      "Activeuser": 4000,

      
    },
    {
      name: 'Feb',
      "Activeuser": 3000,
  
      
    },
    {
      name: 'Mar',
      "Activeuser": 2000,
  
      
    },
    {
      name: 'Apr',
      "Activeuser": 2780,
   
      
    },
    {
      name: 'May',
      "Activeuser": 1890,
     
      
    },
    {
      name: 'Jun',
      "Activeuser": 2390,
   
      
    },
    {
      name: 'Jul',
      "Activeuser": 3490,
    
      
    },
    {
      name: 'Aug',
      "Activeuser": 4000,
    
      
    },
    {
      name: 'Sep',
      "Activeuser": 3000,
    
      
    },
    {
      name: 'Oct',
      "Activeuser": 4500,
    
      
    },
    {
      name: 'Nov',
      "Activeuser": 5000,
    
      
    },
    {
      name: 'Dec',
      "Activeuser": 3490,
    
      
    },
  ];
  
  return (
    <div className='chart'>
          <h3 className="charttitle">User Analytics</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke='blue'/>
              <Line   dataKey="Activeuser" stroke='blue' />
              <Tooltip />
              <CartesianGrid color='white' strokeDasharray="5 5 "/>
             </LineChart>

          </ResponsiveContainer> 
   </div>
  )
}

export default Chart