// src/pages/Charts.js
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Mar', uv: 200, pv: 1398, amt: 2400 },
  { name: 'Apr', uv: 278, pv: 9800, amt: 2400 },
  { name: 'May', uv: 189, pv: 3908, amt: 2400 },
  { name: 'Jun', uv: 239, pv: 4800, amt: 2400 },
];

const Charts = () => (
  <div>
    <h2>Charts</h2>
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
);

export default Charts;
