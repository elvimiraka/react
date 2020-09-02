import React from 'react';
import './screens.css';

class ProfileScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }


    changePassword = (event)=>{
        this.setState({password: event.target.value});
    }
    changeEmail = (event)=>{
        this.setState({email: event.target.value});
    }
    render(){
        const user = this.props.logedUser;
        const cars = this.props.cars.filter(car=>car.user===user)
        return(
            <div>
                {
                    user === null?
                    <div className="log-admin">
                        <p>User is not loged!</p>
                        <label>Username</label>
                        <input onInput={this.changeEmail} type="text" />
                        <label>Password</label>
                        <input onInput={this.changePassword} type="password" />
                        <button onClick={()=>this.props.checkUser(this.state.email, this.state.password)}>Log In</button>
                    </div>
                    :<div className="profile-container">
                        <p className="view-open">All Cars</p>
                        <div>
                            {
                                cars.map((car,i)=>
                                <div onClick={()=>this.props.carPage(car)} className="cars-card">
                                    <p>{car.modeli}</p>
                                    <p>{car.viti}</p>
                                    <p>{car.transmetuesi}</p>
                                    <p>{car.karburanti}</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileScreen;