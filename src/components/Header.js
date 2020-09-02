import React from 'react';
import Logo from './logo.jpg';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <img className="logo" src={Logo} onClick={()=>this.props.changePage('home')}/>
                {
                    this.props.logedUser===null?
                    <p onClick={()=>this.props.changePage('profile')} className="name">Log In</p>
                    :<div className="log-options">
                        <p className="name">{this.props.logedUser} /</p>
                        <p className="logout" onClick={this.props.logOut}>Log Out</p>
                    </div>
                }
            </div>
        )
    }
}

export default Header;