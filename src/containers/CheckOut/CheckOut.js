import React,{Component} from 'react'
import { Route } from 'react-router-dom';
import CheckOutSummery from '../../componenets/Order/CheckOutSummery/CheckOutSummery'
import ContactData from '../ContactData/ContactData'
import {connect} from 'react-redux'

class CheckOut extends Component{
    // state = {
    //     ingredient: null,
    //     totalPrice:0
    //     }
        checkOutContinueHandler=()=>{
            this.props.history.replace('checkout/contact-data');
        }
        checkOutCancelHandler=()=>{
            this.props.history.goBack();
        }
        // componentWillMount(){
        //     const query=new URLSearchParams(this.props.location.search);
        //     const ingredient={}
        //     let price = 0;
        //     for(let param of query.entries()){
        //         //param=['salad',1]
        //         if(param[0]==='price'){
        //            price=param[1]
        //         }else{
        //             ingredient[param[0]]= +param[1]
        //         }
        //     }
        //     this.setState({ingredient:ingredient, totalPrice:price})
        //     console.log(this.props);
        // }
     
render(){
   
    return(
        <div>
            <CheckOutSummery ingredient={this.props.ing}
                             checkOutContinue={this.checkOutContinueHandler}
                             checkOutCancel={this.checkOutCancelHandler}/>
            {/* <Route path={this.props.match.path + '/contact-data'} render={(props)=><ContactData ingredient={this.state.ingredient} price={this.state.totalPrice} {...props}/>}/> */}
            <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
        </div>
        
    )
}
}
const mapStateToProps=state=>{
    return{
        ing:state.burgerBuilder.ingredient,
       
    }
}

export default connect(mapStateToProps) (CheckOut)