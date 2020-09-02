import React from 'react';
import './screens.css';

class AddCarScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: props.logedUser,
            modeli: null,
            viti: null,
            kilometrazhi: null,
            qyteti: null,
            karburanti: 'nafte',
            struktura: null,
            targa: null,
            transmetuesi: 'manual',
            kolaudimi: null,
            siguracioni: null
        }
    }

    modeliInput = (event)=>{
        this.setState({modeli: event.target.value})
    }
    vitiInput = (event)=>{
        this.setState({viti: event.target.value})
    }
    kilometrazhiInput = (event)=>{
        this.setState({kilometrazhi: event.target.value})
    }
    qytetiInput = (event)=>{
        this.setState({qyteti: event.target.value})
    }
    karburantiInput = (event)=>{
        this.setState({karburanti: event.target.value})
    }
    strukturaInput = (event)=>{
        this.setState({struktura: event.target.value})
    }
    targaInput = (event)=>{
        this.setState({targa: event.target.value})
    }
    transmetuesiInput = (event)=>{
        this.setState({transmetuesi: event.target.value})
    }
    kolaudimiInput = (event)=>{
        this.setState({kolaudimi: event.target.value})
    }
    siguracioniInput = (event)=>{
        this.setState({siguracioni: event.target.value})
    }

    noUser = ()=>{
        alert('You are not loged in!')
        this.props.changePage('home');
    }

    render(){
        const user = this.props.logedUser;
        return(
            <div>
                {
                    user===null? 
                    this.noUser()
                    :null
                }
                <div className="car-container">
                    <div className="car-details">
                        <label>Modeli</label>
                        <input onInput={this.modeliInput} required="required" type="text" />
                    </div>
                    <div className="car-details">
                        <label>Viti</label>
                        <input onInput={this.vitiInput} required="required" type="number"/>
                    </div>
                    <div className="car-details">
                        <label>Kilometrazhi</label>
                        <input onInput={this.kilometrazhiInput} required="required" type="number"/>
                    </div>
                    <div className="car-details">
                        <label>Qyteti</label>
                        <input onInput={this.qytetiInput} required="required" type="text"/>
                    </div>
                    <div className="car-details">
                        <label>Karburanti</label>
                        <select onChange={this.karburantiInput} required="required" name="car-fuel">
                            <option value="nafte">Nafte</option>
                            <option value="benzine">Benzine</option>
                            <option value="benzine-gas">Benzine-Gas</option>
                            <option value="elektrike">Elektrike</option>
                        </select>
                    </div>
                    <div className="car-details">
                        <label>Struktura</label>
                        <input onInput={this.strukturaInput} required="required" type="text"/>
                    </div>
                    <div className="car-details">
                        <label>Targa</label>
                        <input onInput={this.targaInput} required="required" type="text" />
                    </div>
                    <div className="car-details">
                        <label>Transmetuesi</label>
                        <select onChange={this.transmetuesiInput} required="required" name="car-transmiter">
                            <option value="manual">Manual</option>
                            <option value="automatik">Automatik</option>
                        </select>
                    </div>
                    <div className="car-details">
                        <label>Data e kolaudimit</label>
                        <input onInput={this.kolaudimiInput} required="required" type="date"/>
                    </div>
                    <div className="car-details">
                        <label>Data e siguracionit</label>
                        <input onInput={this.siguracioniInput} required="required" type="date"/>
                    </div>
                    <button onClick={()=>this.props.registerCar(this.state)}>Add Car</button>
                </div>
            </div>
        )
    }
}

export default AddCarScreen;