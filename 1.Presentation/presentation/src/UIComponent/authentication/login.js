import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup  from '@material-ui/core/FormGroup'
import Logo from './../../logo.png';
import { Link } from "react-router-dom";
class Login extends React.Component {
   constructor(){
    super();
  }
  componentDidMount(){
    
    }
  render(){
    return (
      <div className="auth-card">
          <Card>
              <CardContent>
                <FormGroup row >
                  <div >
                    <img src={Logo} alt="" />
                  </div>
                  <TextField  label="User name"  className="auth-input"/>
                  <TextField  label="Password" type="password"  className="auth-input"  />    
                  <FormControlLabel  control={<Checkbox color="primary"  />}  label="Remember me"  />
                  <Button className="auth-btn" variant="contained"  color="primary" >Login</Button>     
                  <Button className="auth-btn" variant="contained"  color="primary" ><Link className="auth-link" to="/register">Register</Link></Button>
                </FormGroup>
              </CardContent>
          </Card>
      </div>
    );
  }
}
export default Login ;