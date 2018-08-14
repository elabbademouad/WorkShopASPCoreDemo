import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./UIComponent/authentication/login"
import Register from "./UIComponent/authentication/register"
import { BrowserRouter as Router, Route } from "react-router-dom";
class Index extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    </div>
                </Router>
            </div>
        )
    }
}
ReactDOM.render(<Index/>, document.getElementById('root'));