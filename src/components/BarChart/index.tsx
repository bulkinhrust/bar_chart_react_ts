import { ChartType } from '../../types';

import './styles.scss';

const BarChart = ({ title, fill, measure, data }: ChartType) => {
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