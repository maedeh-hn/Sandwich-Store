import * as actionTypes from './action'


const initialState={
    ingredient:{
        hotDog:0,
        cheese:0,
        salad:0,
    },
    totalPrice:0,
}
const Ingredient_Prices={
    hotDog:10000,
    cheese:5000,
    salad:2000
    }

const reducer=(state=initialState , action)=>{
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredient:{...state.ingredient,
                [action.ingredientName]:state.ingredient[action.ingredientName]+1},
                totalPrice: state.totalPrice + Ingredient_Prices[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredient:{...state.ingredient,
                [action.ingredientName]:state.ingredient[action.ingredientName]-1},
                totalPrice: state.totalPrice - Ingredient_Prices[action.ingredientName]
            }
        default:
            return state  
    }

}

export default reducer;