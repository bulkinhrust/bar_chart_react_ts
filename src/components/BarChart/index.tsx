import React from 'react';

import './styles.scss';

type BarChartProps = {
  title: string,
  fill: string,
  measure: string,
  data: Array<number>,
}

const BarChart = ({ title, fill, measure, data }: BarChartProps) => {
  const max = Math.max(...data);
  const getHeight = (num: number): number => num * 90 / max;

  return (
    <div className='chart'>
      <div className='chart__area'>
        {data.map((item) => (
          <div className='chart__area__bar' style={{ height: `${getHeight(item)}%` }}>
            <div className='chart__area__value'>{item} {measure}</div>
            <div className='chart__area__item' style={{ backgroundColor: fill }}/>
          </div>
        ))}
      </div>
      <div className='chart__title'>{title} ({measure})</div>
    </div>
  );
};

export default BarChart;