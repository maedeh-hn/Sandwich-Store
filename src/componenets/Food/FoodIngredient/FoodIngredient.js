
import React , {Component} from 'react'
import classes from '../../Food/FoodIngredient/FoodIngredient.module.css'
import PropTypes from 'prop-types'
import Wrapper from '../../../hoc/Wrapper/Wrapper'

class FoodIngredient extends Component{
    render(){
        let ingredient=null
        switch(this.props.type){
        case('topBread'):
           ingredient= <div className={classes.topBread}></div>
            break;
        case('hotDog'):
            ingredient=<div className={classes.hotDog}>هات داگ</div>
            break;
        case('cheese'):
            ingredient= <div className={classes.cheese}>پنیر</div>
            break;
        case('salad'):
            ingredient= <div className={classes.salad}>کاهو</div>
            break;
        case('bottomBread'):
            ingredient= <div className={classes.bottomBread}></div>
            break;
        default:
            ingredient=null
        }
        return ingredient;
    }
}

FoodIngredient.propTypes={
    type:PropTypes.string.isRequired
}

export default FoodIngredient;