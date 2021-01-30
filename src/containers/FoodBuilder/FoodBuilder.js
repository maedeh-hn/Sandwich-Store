import React , {Component} from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Food from '../../componenets/Food/Food'
import FoodControls from '../../componenets/Food/FoodControls/FoodControls'
import classes from './FoodBuilder.module.css'
import Modal from '../../componenets/Ui/Modal/Modal'
import OrderSummery from '../../componenets/OrderSummery/OrderSummery'
import axios from '../../../src/axios-orders/axios-orders'
import Spinner from '../../componenets/Ui/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/action'



class FoodBuilder extends Component{
    state={
       
        
        purchasing:false,
        backDrop:false,
        sticky:false,
        loading:false
    }
    
    backDropHandler=()=>{
        
        if(this.state. purchasing){
            this.setState({purchasing:false})
        }
    }
    purchaseContinueHandler=()=>{
        // const queryParams=[]
        // for(let i in this.state.ingredient){
        //     //salad=2
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredient[i]))
        // }
        // queryParams.push('price=' + this.state.totalPrice)
        // const queryString=queryParams.join('&')
        // this.props.history.push(
        //     {pathname:'/checkout',
        //     search:'?'+ queryString}
        // )
        this. props.history.push('/checkout')
    }
    updatePurchaseState(ingredient){
        const sum=Object.keys(ingredient)
        .map(igkey=>{
            return ingredient[igkey]
        }).reduce((sum,el)=>{
            return sum+el ;
        },0)
        return (sum>0)
        }


    purchaseHandler=()=>{
        if(this.state.purchasing){
             this.setState({purchasing:false})
        }else{
            this.setState({purchasing:true})
        }
        
    }
    
    
    
      
      componentDidMount(){
    //     axios.get('ingredient.json').then(response=>{
    //         this.setState({ingredient:response.data})
    //     }

    //     ).catch(error=>{
    //         console.log(error)
    //     })
     
     }

    render(){
        
const disabledInfo = {
    ...this.props.ing
    };
    for (let key in disabledInfo) {
        // if(disabledInfo[key]<0){
        //     disabledInfo[key]=true
        // }
        disabledInfo[key]=disabledInfo[key]<=0
        }
        let burger=<Spinner/>
        let orderSummery=null
        if(this.props.ing){
            burger=(
                <Wrapper>
                <Food ingredient={this.props.ing}/>
                <div className={classes.mainBackground}>
                    <FoodControls 
                    ingredientAdded={this.props.onIngredientAdded} 
                    ingredientremove={this.props.onIngredientRemoved}
                    disabled = {disabledInfo}
                    price={this.props.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.updatePurchaseState(this.props.ing)}
                    />
                </div>
                
            </Wrapper>
            )  
            orderSummery=
            <OrderSummery ingredients={this.props.ing}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.backDropHandler}
            />
        }
        if(this.state.loading){
            orderSummery=<Spinner/>
        }
        
               
             
                
        return(
           <Wrapper>
               
                <Modal show={this.state.purchasing}  modalClickCancel={this.backDropHandler}>
                    {orderSummery}
                </Modal>
              
                {burger}
                
            </Wrapper>
           
           
        )
    }
}
const mapStateToProps=state=>{
    return{
        ing:state.ingredient,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps= dispatch=>{
    return{
        onIngredientAdded: (ingName) => dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientRemoved:(ingName) => dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (WithErrorHandler(FoodBuilder,axios));