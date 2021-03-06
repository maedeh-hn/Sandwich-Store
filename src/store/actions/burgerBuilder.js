import * as actionTypes from './actionTypes'
import axios from '../../axios-orders/axios-orders'


export const addIngredient=(name)=>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}
export const removeIngredient=(name)=>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}
export const setIngredients = ( ingredients ) => {
    return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
    };
    };
export const initIngredient=()=>{
    return dispatch=>{
        axios.get('ingredient.json').then(response=>{
            dispatch(setIngredients(response.data));
                }
        
                ).catch(error=>{
                    console.log(error)
                })

    }
}