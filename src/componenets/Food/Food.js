
import { object } from 'prop-types'
import React from 'react'
import FoodBuilder from '../../containers/FoodBuilder/FoodBuilder'
import FoodIngredient from '../Food/FoodIngredient/FoodIngredient'
import classes from '../Food/Food.module.css'

const food=(props)=>{

    let transformedIngerdient= Object.keys(props.ingredient).map(igkey=>{
        
        return [...Array(props.ingredient[igkey])].map((_,i)=>{
            
            return<FoodIngredient key={igkey+i} type={igkey}/>
        })   
        
    })
   
    .reduce((arr, el) => {
        return arr.concat(el);
        }, []);
        
    
    if(transformedIngerdient.length===0){
        transformedIngerdient=<p>لطفا مواد غذایی مورد نظر خودتان را انتخاب کنید</p>
    }
    
    return(
        <div className="container">
            <div className={classes.burgerSize}>
            <FoodIngredient type="topBread"/>
            {transformedIngerdient}
            <FoodIngredient type="bottomBread"/>
        </div>
        </div>
        
    )
}

export default food