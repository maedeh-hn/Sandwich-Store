import React , {Component} from 'react'
import Modal from '../../componenets/Ui/Modal/Modal'
import Wrapper from '../Wrapper/Wrapper'

const WithErrorHandler=(WrappedComponenet,axios)=>{
    return class extends Component{
    state={
        error:null
    }
    componentWillMount(){
        this.reqInterceptor=axios.interceptors.request.use(req=>{
            this.setState({error:null})
            return req
        })
        this.resInterceptor=axios.interceptors.response.use(res=>res,error=>this.setState({error:error}))
    }
    componentWillUnmount(){
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.resInterceptor);
    }
    errorModalHandler=()=>{
        this.setState({error:null})
    }
render(){
    return(
        <Wrapper>
            <Modal show={this.state.error} modalClickCancel={this.errorModalHandler}>
            {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponenet {...this.props}/>
        </Wrapper>
    )
}
}
}
export default WithErrorHandler