import React from 'react';
import './screens.css';

class AddUserScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }

    onUsernameChange = (event)=>{
        this.setState({username: event.target.value})
    }

    onEmailChange = (event)=>{
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({password: event.target.value})
    }

    render(){
        return(
            <div>
                <div className="sign-container">
                    <div className="details">
                        <label>Username</label>
                        <input onInput={this.onUsernameChange} type="text"/>
                    </div>
                    <div className="details">
                        <label>Email</label>
                        <input onInput={this.onEmailChange} type="text"/>
                    </div>
                    <div className="details">
                        <label>Password</label>
                        <input onInput={this.onPasswordChange} type="password"/>
                    </div>
                    <button onClick={()=>this.props.registerUser({
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    })}>Add User</button>
                </div>
            </div>
        )
    }
}

export default AddUserScreen;