import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './SideDrawers.module.css'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import Backdrop from '../../Ui/Backdrop/Backdrop'


const sideDrawer=(props)=>{
   let attachedClasses=[classes.sideDrawer,classes.close]
    if(props.open){
    attachedClasses=[classes.sideDrawer,classes.open]
    }
    return(
     
        <Wrapper>
          <div className={classes.mobileOnly}><Backdrop show={props.open} modalClickCancel={props.close}/></div>  
        <div className={attachedClasses.join(' ')}>
           <div className={classes.sideLogo}>
                <Logo />
            </div> 
           <nav className={classes.sideNav}>
                <NavigationItems/>
           </nav>
            

        </div>
        </Wrapper>
    )
}

export default sideDrawer