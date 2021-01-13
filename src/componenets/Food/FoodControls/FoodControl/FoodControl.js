import React from 'react'
import classes from './FoodContrl.module.css'

import Wrapper from '../../../../hoc/Wrapper/Wrapper'

const Foodcontrol =(props)=>{
  return  <div className="col-sm-6 d-flex justify-content-between m-auto pb-2 pt-2">
        <div className={classes.control}><div  >{props.label}</div></div>
       <div className={classes.less}>
       <button className="btn btn-success" onClick={props.add}>افزودن</button>
<button className="btn btn-danger mr-4"  onClick={props.remove} disabled={props.disabled} >کاستن</button>
        </div>
        
    </div>

}

export default Foodcontrol 