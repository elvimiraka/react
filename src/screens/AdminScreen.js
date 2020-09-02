import React from 'react';
import './screens.css';

class AdminScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usersViewOpen: false,
            carsViewOpen: false,
            username: null,
            password: null,
            adminloged: props.loged
        }
    }

    changePassword = (event)=>{
        this.setState({password: event.target.value});
    }
    changeUsername = (event)=>{
        this.setState({username: event.target.value});
    }

    logAdmin = ()=>{
        if(this.state.username === 'admin' && this.state.password === 'admin')
        {
            this.props.logAdmin();
            this.setState({adminloged: 'loged'})
        }
        else alert('wrong credentials')
    }

    render(){
        const registeredUsers = this.props.users;
        const registeredCars = this.props.cars;
        return(
            <div>
                {
                    this.state.adminloged===null?
                    <div className="log-admin">
                        <p>Admin is not loged!</p>
                        <label>Username</label>
                        <input onInput={this.changeUsername} type="text" />
                        <label>Password</label>
                        <input onInput={this.changePassword} type="password" />
                        <button onClick={this.logAdmin}>Log In</button>
                    </div>
                    :<div className="view-container">
                        <div>
                            <p onClick={()=>{
                                if(this.state.carsViewOpen) this.setState({carsViewOpen: false})
                                else this.setState({carsViewOpen: true})
                            }} className="view-open">+ All Cars</p>

                            {
                                this.state.carsViewOpen?
                                <div className="cars-card-container">
                                    {
                                        registeredCars.map((car, index)=>
                                            <div onClick={()=>this.props.carPage(car)} className="cars-card">
                                                <p>{car.modeli}</p>
                                                <p>{car.viti}</p>
                                                <p>{car.transmetuesi}</p>
                                                <p>{car.karburanti}</p>
                                            </div>
                                        )
                                    }
                                </div>
                                :null
                            }
                        </div>
                        <div>
                            <p onClick={()=>{
                                if(this.state.usersViewOpen) this.setState({usersViewOpen: false})
                                else this.setState({usersViewOpen: true})
                            }} className="view-open">+ All Users</p>
                            {
                                this.state.usersViewOpen?
                                <div className="cars-card-container">
                                    {
                                        registeredUsers.map((user, index)=>
                                            <div className="user-card">
                                                <p>Username: {user.username}</p>
                                                <p>Email: {user.email}</p>
                                            </div>
                                        )
                                    }
                                </div>
                                :null
                            }
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

export default AdminScreen;