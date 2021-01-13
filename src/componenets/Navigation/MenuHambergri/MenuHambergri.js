import classes from './MenuHambergri.module.css'
import React from 'react'


const MenuHambergri= (props)=>{
    return(
        <div  onClick={props.sideDrawerClick}>
            <div className={classes.MenueLine}>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}

export default MenuHambergri