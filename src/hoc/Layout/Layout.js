import React , {Component} from 'react'
import Wrapper from '../Wrapper/Wrapper'
import SideDrawer from '../../componenets/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../componenets/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component{
    state={
        SideDrawerback:false
    }
    closeSideDrawer=()=>{
        this.setState({SideDrawerback: false})
    }
    menuHambergriHandler=()=>{
        this.setState((prevState)=>{
            return{SideDrawerback: !this.state.SideDrawerback}
        })
    }
    render(){
        return(
            <Wrapper>
                <Toolbar clickMenu={this.menuHambergriHandler}/>
                <SideDrawer open={this.state.SideDrawerback} close={this.closeSideDrawer}/>
                <main className={classes.contentFont}>
                    {this.props.children}
                </main>
            </Wrapper>
            )
    }
}

export default Layout;