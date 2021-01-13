import React from 'react'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import FoodControl from './FoodControl/FoodControl';

const controls=[
    {label:'هات داگ' , type:'hotDog'},
    {label:' پنیر' , type:'cheese'},
    {label:' سالاد' , type:'salad'}
];


const FoodControls =(props)=>{
   
   
    return(
        <Wrapper>
            <div className='pt-4 pb-4'>
    <p>قیمت کل:{props.price}تومان</p>
             {controls.map(ctrl=>(
       <FoodControl  key={ctrl.label} 
       label={ctrl.label}
       add={()=>props.ingredientAdded(ctrl.type)} 
       remove={()=>props.ingredientremove(ctrl.type)}
       disabled={props.disabled[ctrl.type]}
         />
       
             ))}  
             <button className="btn btn-primary" disabled={!props.purchasable} onClick={props.ordered}>خرید</button>
            </div>
            
        </Wrapper>
    )
    
}
export default FoodControls