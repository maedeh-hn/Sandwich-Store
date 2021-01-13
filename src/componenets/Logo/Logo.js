
import React from 'react' 
import burgerLogo from '../../assets/images/BurgerLogo.jpg'
import classes from './Logo.module.css'

const logo=(props)=>(
    <div className={classes.logo}>
       <img src={burgerLogo} alt="لوگو سایت برگرویچ" className={classes.logo}/> 
    </div>
)

export default logo