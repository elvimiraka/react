import React from 'react';
import TabCard from '../components/TabCard';
import './screens.css';

class MainPage extends React.Component{
    render(){
        return(
            <div className="screen">
                <div className="tab-container">
                    <TabCard 
                        imageCover="https://simpleicon.com/wp-content/uploads/user1.png" 
                        title="Add User" 
                        onPress={()=>this.props.changePage('addUser')} 
                    />
                    <TabCard 
                        imageCover="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png" 
                        title="Add Car" 
                        onPress={()=>this.props.changePage('addCar')}  
                    />
                    <TabCard 
                        imageCover="https://static.thenounproject.com/png/99161-200.png" 
                        title="Admin" 
                        onPress={()=>this.props.changePage('admin')}
                    />
                    <TabCard 
                        imageCover="https://image.flaticon.com/icons/png/512/16/16363.png" 
                        title="User Profile" 
                        onPress={()=>this.props.changePage('profile')} 
                    />
                </div>
            </div>
        )
    }
}

export default MainPage;