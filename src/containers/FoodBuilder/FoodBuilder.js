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

const Ingredient_Prices={
hotDog:10000,
cheese:5000,
salad:2000
}

class FoodBuilder extends Component{
    state={
        ingredient:null,
        totalPrice:0,
        purchasable:false,
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
        const queryParams=[]
        for(let i in this.state.ingredient){
            //salad=2
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredient[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString=queryParams.join('&')
        this.props.history.push(
            {pathname:'/checkout',
            search:'?'+ queryString}
        )
    }
    updatePurchaseState(updatedIngredient){
        const sum=Object.keys(updatedIngredient)
        .map(igkey=>{
            return updatedIngredient[igkey]
        }).reduce((sum,el)=>{
            return sum+el ;
        },0)
        this.setState({purchasable:sum>0})
        }
    purchaseHandler=()=>{
        if(this.state.purchasing){
             this.setState({purchasing:false})
        }else{
            this.setState({purchasing:true})
        }
        
    }
    
    addIngredient=(type)=>{
       const oldCount=this.state.ingredient[type]
       const updatedCount=oldCount+1
       const updatedIngredient={...this.state.ingredient}
       updatedIngredient[type]=updatedCount

       const priceAdition=Ingredient_Prices[type]
       const oldPrice=this.state.totalPrice
       const newPrice=priceAdition+oldPrice

       this.setState({totalPrice:newPrice,ingredient:updatedIngredient})
       this.updatePurchaseState(updatedIngredient)
    }
    removeIngredient=(type)=>{
        const oldCount=this.state.ingredient[type]
        const updatedCount=oldCount-1
        if(updatedCount<0){return null}
        const updatedIngredient={...this.state.ingredient}
        updatedIngredient[type]=updatedCount
 
        const priceAdition=Ingredient_Prices[type]
        const oldPrice=this.state.totalPrice
        const newPrice=oldPrice-priceAdition
 
        this.setState({totalPrice:newPrice,ingredient:updatedIngredient})
        this.updatePurchaseState(updatedIngredient)
     }
      
     componentDidMount(){
        axios.get('ingredient.json').then(response=>{
            this.setState({ingredient:response.data})
        }

        ).catch(error=>{
            console.log(error)
        })
    }

    render(){
        
const disabledInfo = {
    ...this.state.ingredient
    };
    for (let key in disabledInfo) {
        // if(disabledInfo[key]<0){
        //     disabledInfo[key]=true
        // }
        disabledInfo[key]=disabledInfo[key]<=0
        }
        let burger=<Spinner/>
        let orderSummery=null
        if(this.state.ingredient){
            burger=(
                <Wrapper>
                <Food ingredient={this.state.ingredient}/>
                <div className={classes.mainBackground}>
                    <FoodControls 
                    ingredientAdded={this.addIngredient} 
                    ingredientremove={this.removeIngredient}
                    disabled = {disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    />
                </div>
                
            </Wrapper>
            )  
            orderSummery=
            <OrderSummery ingredients={this.state.ingredient}
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

export default WithErrorHandler(FoodBuilder,axios);