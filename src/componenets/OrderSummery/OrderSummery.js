import React from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Button from '../Ui/Button/Button'


const OrderSummery =(props)=>{
    const ingredientsSummery=Object.keys(props.ingredients)
    .map(igkey=>{
    return <li key={igkey}><span>{igkey}</span>:{props.ingredients[igkey]}</li>
    })
   return(
    <Wrapper>
    <h4>اقلام سفارشی شما</h4>
    <p>ساندویچی که شما سفارش دادید:</p>
    <ul className="list-unstyled">
   { ingredientsSummery}
    </ul>
    <hr/>
    <Button btnType="btn-success ml-3" clicked={props.purchaseContinued}>پرداخت</Button>
    <Button btnType="btn-warning" clicked={props.purchaseCancelled}>بازگشت به منو</Button>
</Wrapper>
   ) 
}

export default OrderSummery