import React from 'react';
import  { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup  from '@material-ui/core/FormGroup'
import Logo from './../../logo.png';
import RegisterModel from './../../Common/RegisterModel';
import {AuthenticationServices} from './../../ServiceComponent/AuthenticationServices'
import Message from './../message';
class Register extends React.Component{
    constructor(){
        super();
        this.state={redirect:false,error:false};
        this.submit=this.submit.bind(this);
        this.authService=new AuthenticationServices();
    }
    submit(){
        console.log(document.getElementById("register-firstname").value);
        var registerModel=new RegisterModel(
            document.getElementById("register-firstname").value,
            document.getElementById("register-lastname").value,
            document.getElementById("register-username").value,
            document.getElementById("register-password").value
        );
        var response=this.authService.Register(registerModel);
        response.then(data=>{
            if(data.status===200){
                this.setState({redirect:true,error:false});
            }else
            {
                this.setState({redirect : false,error:true});
            }
        
        });
    }
    render(){
        if(this.state.redirect)
        {
            return <Redirect to='/' />
        }
        var message=null;
        if(this.state.error){
               
            message=<Message variant="error" opened={this.state.error}  message="username is already taken" duration={6000}vertical="top" horizontal="center"/>;
               
        }
        return (
            <div>
                <div className="auth-card">
                    <Card>
                        <CardContent>
                            <FormGroup row >
                                <div >
                                <img src={Logo} alt="" />
                                </div>
                                <TextField id="register-firstname" required label="First name"  className="auth-input"/>
                                <TextField id="register-lastname" required  label="Last name"  className="auth-input"/>
                                <TextField id="register-username" required label="Username"  className="auth-input"/>
                                <TextField id="register-password" required  label="Password" type="password"  className="auth-input"  />    
                                <TextField id="register-confirmpassword" required label="Confirm password" type="password"  className="auth-input"  />
                                <Button className="auth-btn" onClick={this.submit} variant="contained" color="primary" >Submit</Button>
                            </FormGroup>
                        </CardContent>
                    </Card> 
                </div>
                {message}
            </div>
        );
    }

}
export default Register