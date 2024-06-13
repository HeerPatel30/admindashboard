import React from 'react'
import '../Featuredinfo/Feature.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import Chart from '../Chart/Chart'
const Feature = () => {
  return (
    
    <div className='Feature'>
        <div className="featureitem">
            <span className="featuretitle">
                Revenue
            </span>
            <div className="moneycontainer">
             <span className="money">$2,200</span>
              <span className="moneyrate"> -2.222<ArrowDownward className='arrow negative'/></span>
            </div>
            <div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>
        </div>
        <div className="featureitem">
            <span className="featuretitle">
                Sales
            </span>
            <div className="moneycontainer">
             <span className="money">$5,200</span>
              <span className="moneyrate"> -1.25<ArrowDownward className='arrow negative'/></span>
            </div>
            <div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>
        </div>
        <div className="featureitem">
            <span className="featuretitle">
                Cost
            </span>
            <div className="moneycontainer">
             <span className="money">$3,200</span>
              <span className="moneyrate"> +2.222<ArrowUpward className='arrow '/></span>
            </div>
            <div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>
        </div>
        

    </div>
    

  )
}

export default Feature