
import React from 'react'
import header from '../../../assets/images/header.jpg'
import classes from './Header.module.css'
const Header=()=>(
    <div className={classes.header}>
        <img src={header} />
    </div>
)

export default Header