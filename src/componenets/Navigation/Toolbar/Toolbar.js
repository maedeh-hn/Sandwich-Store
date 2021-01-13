import React,{useState} from 'react'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Header from '../Header/Header'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuHambergri from '../MenuHambergri/MenuHambergri'


const Toolbar=(props)=>{

    const [navBar,setNavbar]=useState(false)


   const stickyMenu=()=>{
        if(window.scrollY>=200){
           setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',stickyMenu)
    const Logoclasses=[classes.DesktopOnly,'pl-4']
    return(
        <Wrapper>
            <Header/>
           
            <header className={classes.Toolbar} 
                    style={{position:navBar? 'fixed' : 'relative',
                    top:navBar? '0' : '0px'}}>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                </nav>
                
                <div className={Logoclasses.join(' ')} >
                    <Logo/>
                </div>
                <div className={classes.mobileOnly}>
                    <MenuHambergri  sideDrawerClick={props.clickMenu}/>
                </div>
               
            
            </header>
            
        </Wrapper>
    )
}

export default Toolbar