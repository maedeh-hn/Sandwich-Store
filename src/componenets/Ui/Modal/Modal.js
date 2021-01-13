import React, { Component } from 'react'
import classes from './Modal.module.css'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import BarProp from '../Backdrop/Backdrop'


class Modal extends Component{
shouldComponentUpdate(nextProps,nextState){
    return (nextProps.show !==this.props.show || nextProps.children !==this.props.children)
}
    render(){
        return(
            <Wrapper>
            <BarProp show={this.props.show}
            modalClickCancel={this.props. modalClickCancel}/>
            <div className={classes.modal}
        style={{
            transform:this.props.show ? 'translateY(0)' : 'translateY(-10)',
            opacity:this.props.show? '1': '0',
            zIndex:this.props.show? '500': '-100'
        }}>
            {this.props.children}
        </div>
        </Wrapper>
        )
    }
}
   


export default Modal