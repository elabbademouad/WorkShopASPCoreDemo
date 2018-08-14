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
class Register extends React.Component{
    constructor(){
        super();
        this.state={redirect:false};
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
            debugger
            if(data.status==200){
                this.setState({redirect:true});
            }
        
        });

    }
    render(){
        if(this.state.redirect)
        {
            return <Redirect to='/' />
        }   
        return (
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
        );
    }

}
export default Register