import React from 'react'
import classes from './Input.module.css'

const Input=(props)=>{
    let inputElement=null;
    const inputClasses=["form-group", "text-right"]
    if(props.inValid && props.shouldValidate && props.touched){
        console.log(props.inValid);
        inputClasses.push(classes.InValid)
    }
    switch(props.elementType){
        case('input'):
        inputElement=<input className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed}/>
        break;
        case('textarea'):
        inputElement=<textarea className="form-control"  {...props.elementConfig} onChange={props.changed}>{props.value}</textarea>
        break;
        case('select'):
        (inputElement=<select className="form-control" value={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(option=>{
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
        </select>)
        break;
        default:
        inputElement=<input className="form-control"  {...props.elementConfig} value={props.value} onChange={props.changed}/>
        
    }


    return(
        <div className={inputClasses.join(' ')}>
            <label>{props.label}</label>
            {inputElement}

        </div>
    )
}

export default Input;