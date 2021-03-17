import './App.css'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderLineChart = (
  <LineChart width={400} height={400} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

function App() {
  return (
    <div>{renderLineChart}</div>
  )
}

export default App;
