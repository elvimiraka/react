import React from 'react';
import './App.css';
import MainPage from './screens/MainPage';
import AddUserScren from './screens/AddUserScreen';
import AddCarScren from './screens/AddCarScreen';
import AdminScreen from './screens/AdminScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './components/Header';
import CarDetailsScreen from './screens/CarDetailsScreen';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      page: 'home',
      car: null,
      cars: [],
      users: [],
      userloged: null,
      adminloged: null
    }
  }

  statePageChange = (page) => {
    this.setState({page: page});
  }

  registerCar = (car) => {
    this.setState({cars: this.state.cars.concat(car), page: 'home'});
  }

  registerUser = (user) => {
    this.setState({users: this.state.users.concat(user), userloged: user.email, page: 'home'});
  }

  logUser = (user)=>{
    this.setState({userloged: user, page: 'home'})
  }

  logAdmin = ()=>{
    this.setState({adminloged: 'loged'})
  }

  logOut = ()=> {
    this.setState({userloged: null, page: 'home'})
  }

  carPage = (car)=>{
    this.setState({car: car, page: 'carpage'})
  }

  checkUser =(email, password)=>{
    let isLoged = false
    this.state.users.map(user=>{
      if(user.email === email && user.password === password)
      {
        isLoged = true;
        this.logUser(email);
      }
        
    })
    if(!isLoged)
      alert('No User found');
  }

  pageHandler = () =>{
    switch(this.state.page){
      case 'home':
        return <MainPage changePage={this.statePageChange} />;
      case 'addUser':
        return <AddUserScren registerUser={this.registerUser} />
      case 'addCar':
        return <AddCarScren registerCar={this.registerCar} logedUser={this.state.userloged} changePage={this.statePageChange} />
      case 'admin':
        return <AdminScreen carPage={this.carPage} loged={this.state.adminloged} logAdmin={this.logAdmin} cars={this.state.cars} users={this.state.users} />
      case 'profile':
        return <ProfileScreen carPage={this.carPage} checkUser={this.checkUser} logedUser={this.state.userloged} cars={this.state.cars}  />
      case 'carpage':
        return <CarDetailsScreen car={this.state.car} />
      default:
        return <MainPage />;
    }
  }

  render(){
    return (
      <div className="App">
        <Header logOut={this.logOut} changePage={this.statePageChange} logedUser={this.state.userloged} />
        {this.pageHandler()}
      </div>
    );
  }
  
}

export default App;
