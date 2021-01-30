import classes from './ContactData.module.css';
import React, {Component} from 'react'
import Button from '../../componenets/Ui/Button/Button'
import axios from '../../axios-orders/axios-orders';
import Spinner from '../../componenets/Ui/Spinner/Spinner';
import Input from '../../componenets/Ui/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component{
state={
    orderForm:{
        name:{
            label:'نام و نام خانوادگی',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'نام '
            },
            value:'',
            touched:false,
            validation: {
                required: true, //پر کردن فیلد اجباری است
                minLength:5,
                maxLemgth:10
                },
                touched:false,
                valid: false,  //هر فیلد معتبر است یا نه
        },
        email:{
            label:'پست الکترونیکی',
            elementType:'input',
            elementConfig:{
                type:'emile',
                placeholder:'ایمیل'
            },
            value:'',
            validation: {
                required: true //پر کردن فیلد اجباری است
                },
                touched:false,
                valid: false  //هر فیلد معتبر است یا نه
        },
        address:{
            label:'آدرس پستی',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'آدرس'
            },
            value:'',
            validation: {
                required: true //پر کردن فیلد اجباری است
                },
                touched:false,
                valid: false  //هر فیلد معتبر است یا نه
        },
        deliveryMethod:{
            label:'شیوه ارسال',
            elementType:'select',
            elementConfig:{
                options:[
                    {value: 'pishtaz' , label:'ارسال با پست پیشتاز'},
                    {value: 'express' , label:'ارسال با پست اکسپرس'}
                ]
            },
            
            value:'',
            validation:{},
            valid: true  //هر فیلد معتبر است یا نه
        }

    },
    formIsValid: false,
    loading:false
}



orderHandler=()=>{
    alert('برای خرید ادامه دهید')
    this.setState({ loading: true })
    const formData={}
    for(let formElementState in this.state.orderForm){
        formData[formElementState]=this.state.orderForm[formElementState]
        
    }
    const order={
        ingredient:this.props.ing,
        price:this.props.totalPrice,
        customer:formData
    }
    axios.post('/orders.json',order)
    .then(response=>{
        this.setState({ loading: false })
        this.props.history.push('/')
        console.log(response)})
    .catch(error=>{
        this.setState({ loading: false })
        console.log(error)})
}



inputChangedHandler=(event,inputKey)=>{
   const updatedOrderForm={
       ...this.state.orderForm
   }
   const updatedFormElement={
       ...updatedOrderForm[inputKey]
   }
   updatedFormElement.value=event.target.value;
   updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
   console.log(updatedFormElement.valid);
   updatedOrderForm[inputKey]=updatedFormElement;
   updatedFormElement.touched=true
   let formIsValid=true
   for(let key in updatedOrderForm){
       formIsValid=updatedOrderForm[key].valid && formIsValid
   }
   console.log(formIsValid);
   this.setState({orderForm:updatedOrderForm , formIsValid:formIsValid})
    }
    checkValidity(value,rules){
        let isValid=true;

        if(rules.required){
            isValid=value.trim() !== '' && isValid //اگر عبارت سمت راست صحیح بود عبارت سمت چپ را صحیح کن
        }
        if(rules.minLength){
          isValid=value.length>=rules.minLength && isValid
        }
        if(rules.maxLemgth){
            isValid=value.length<=rules.maxLemgth && isValid
        }
        return isValid;
        

    }


    render(){
        
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form=(
                <form  className={'col-sm-6 ml-auto mr-auto'} onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement=>{
                        return<Input
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        label={formElement.config.label}
                        key={formElement.id}
                        inValid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        changed={(event)=>this.inputChangedHandler(event, formElement.id)}
                        
                        />
                    })}
                    <Button  btnType="btn-success ml-auto mr-auto mb-5" clicked={this.orderHandler} disabled={!this.state.formIsValid}>پرداخت نهایی</Button>
                </form>
        )
        if(this.state.loading){
            form=<Spinner/>
        }
        return(
          
              <div >
                
                {form}
            </div>
              
            
            )
    }
}
const mapStateToProps=state=>{
    return{
        ing:state.ingredient,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps) (ContactData);