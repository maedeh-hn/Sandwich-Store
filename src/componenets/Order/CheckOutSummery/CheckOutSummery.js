import classes from './CheckOutSummery.module.css'
import React from 'react'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import Food from '../../Food/Food'
import Button from '../../Ui/Button/Button'

const CheckOutSummery=(props)=>{
    return(
<div className={classes.checkOutSummery}>
    <h3>سفارش شما به شرح زیر می باشد. امیدواریم لذت ببرید</h3>
    <div>
        <Food ingredient={props.ingredient}/>
    </div>
    <Button className={"ml-2"} btnType='btn-success' clicked={props.checkOutContinue}>ادامه</Button>
    <Button  className={"mr-2"} btnType='btn-warning' clicked={props.checkOutCancel}> انصراف</Button>
</div>
    )
}

export default CheckOutSummery