import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup  from '@material-ui/core/FormGroup'
import Logo from './../../../logo.png';
class Register extends React.Component{
    
    render(){
        
        return (
            <div className="auth-card">
                <Card>
                    <CardContent>
                        <FormGroup row >
                            <div >
                            <img src={Logo} alt="" />
                            </div>
                            <TextField   label="First name"  className="auth-input"/>
                            <TextField   label="Last name"  className="auth-input"/>
                            <TextField   label="Username"  className="auth-input"/>
                            <TextField   label="Password" type="password"  className="auth-input"  />    
                            <TextField   label="Confirm password" type="password"  className="auth-input"  />
                            <Button className="auth-btn" variant="contained" color="primary" >Submit</Button>
                        </FormGroup>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default Register