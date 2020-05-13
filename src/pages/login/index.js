import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper,LoginBox,Input,Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
    render() {
        let {loginStatus} =this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => {this.props.login(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to="/" />
        }
    }
    
}

const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(userName,pwd){
        console.log(userName.value);
        console.log(pwd.value);
        dispatch(actionCreators.login(userName.value,pwd.value))
    }
})

export default connect(mapState,mapDispatch)(Login);