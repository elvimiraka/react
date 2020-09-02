import React from 'react';
import './components.css';

class TabCard extends React.Component{
    render(){
        return(
            <div className="card" onClick={this.props.onPress}>
                <img className="img" alt="im" src={this.props.imageCover}/>
                <p className="title">{this.props.title}</p>
            </div>
        )
    }
}

export default TabCard;