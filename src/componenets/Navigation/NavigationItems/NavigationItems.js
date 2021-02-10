import classes from './NavigationItems.module.css'
import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems=(props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>ثبت سفارش</NavigationItem>
        <NavigationItem link='/checkout'>پرداخت</NavigationItem>
        <NavigationItem link='/authentication'>ورود</NavigationItem>
    </ul>
    
)

export default NavigationItems