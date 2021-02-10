import React, {Component} from 'react'
import Input from '../../componenets/Ui/Input/Input'
import Button from '../../../src/componenets/Ui/Button/Button'

class Auth extends Component{
    state = {
        controls: {
            email: {
                label: 'پست الکترونیک',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'پست الکترونیک'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                label: 'رمز عبور',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'رمز عبور'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }
    inputHandler = (event, controlName) =>{
        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
       
        this.setState({controls: updatedControls})
    }


    render(){
        
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
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
                    changed={(event)=>this.inputHandler(event, formElement.id)}
                    
                    />
                })}
              
            </form>
    )
     
        
        return(
           
            <div>
                <form>
                    {form}
                <Button  btnType="btn-success ml-auto mr-auto mb-5">ورود</Button>
                </form>
            </div>
        )  
    }
}
export default Auth;