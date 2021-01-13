import classes from './NavigationItems.module.css'
import React from 'react'

const NavigationItems=(props)=>(
    <div className={classes.NavigationItems}>
        <ul >
        <li ><a href='/' className={classes.active}>صفحه اصلی</a></li>
        <li><a href='/'>پرداخت</a></li>
    </ul>
    </div>
    
)

export default NavigationItems