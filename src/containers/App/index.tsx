import React from 'react';
import BarChart from '../../components/BarChart';

import './styles.scss';

const graphics = [
  { title: 'Temperature', fill: '#d2afae', measure: 'C°', data: [16, 19, 21, 18, 14, 19, 22, 25] },
  { title: 'Humidity', fill: '#a5c6b1', measure: '%', data: [60, 62, 65, 70, 75, 72, 67, 63] },
];

const App:React.FC<{}> = () => {
  return (
    <div className='container'>
      {graphics.map(({ title, fill, measure, data }) => (
        <BarChart key={title}
                  title={title}
                  fill={fill}
                  measure={measure}
                  data={data}/>
      ))}
    </div>
  );
};

export default App;
