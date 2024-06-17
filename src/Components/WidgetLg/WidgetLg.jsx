import React from 'react';
import '../WidgetLg/WidgetLg.css';

const WidgetLg = () => {

  const CustomButton = ({ type }) => {
    return <button className={"btn" + type}>{type}</button>;
  }

  return (
    <div className='WidgetLg'>
      <span className="title">Latest Transaction</span>
      <table className="WidgetLgTable">
       
          <tr className='tabletr'>
            <th className='tableth'>Customer</th>
            <th className='tableth'>Date</th>
            <th className='tableth'>Amount</th>
            <th className='tableth'>Status</th>
          </tr>
        
            <tr className="tabletr">
            <td className="user">
              <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" className="img" />
              <span className="username">Susan Carol</span>
            </td>
            <td className="date">20/10/2004</td>
            <td className="amount">$150.0</td>
            <td><CustomButton type="Approved" /></td>
          </tr>
      
            <tr className="tabletr">
            <td className="user">
              <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" className="img" />
              <span className="username">Susan Carol</span>
            </td>
            <td className="date">20/10/2004</td>
            <td className="amount">$150.0</td>
            <td><CustomButton type="Pending" /></td>
          </tr>
      
            <tr className="tabletr">
            <td className="user">
              <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" className="img" />
              <span className="username">Susan Carol</span>
            </td>
            <td className="date">20/10/2004</td>
            <td className="amount">$150.0</td>
            <td><CustomButton type="Decline" /></td>
          </tr>
      
            <tr className="tabletr">
            <td className="user">
              <img src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q" alt="" className="img" />
              <span className="username">Susan Carol</span>
            </td>
            <td className="date">20/10/2004</td>
            <td className="amount">$150.0</td>
            <td><CustomButton type="Approved" /></td>
          </tr>
      
      </table>
    </div>
  );
}

export default WidgetLg;
