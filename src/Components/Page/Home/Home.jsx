import React from 'react';
import '../Home/Home.css';
import Feature from '../../Featuredinfo/Feature';
import Chart from '../../Chart/Chart';
import WidgetLg from '../../WidgetLg/WidgetLg';
import WidgetSm from '../../WidgetSm/WidgetSm';

const Home = () => {
  return (
    <div className='container'>
      <Feature />
      <Chart />
      <div className="homewidget">
        <div className="widget-container">
          <WidgetSm />
        </div>
        <div className="widget-container">
          <WidgetLg />
        </div>
      </div>
    </div>
  );
};

export default Home;
