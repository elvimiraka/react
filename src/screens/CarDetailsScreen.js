import React from 'react';
import './screens.css';

class CarDetailsScreen extends React.Component{
    render(){
        const car = this.props.car;
        return(
            <div>
                <div className="car-container">
                    <div className="car-details">
                        <label>Modeli</label>
                        <p>{car.modeli}</p>
                    </div>
                    <div className="car-details">
                        <label>Viti</label>
                        <p>{car.viti}</p>
                    </div>
                    <div className="car-details">
                        <label>Perdoruesi</label>
                        <p>{car.user}</p>
                    </div>
                    <div className="car-details">
                        <label>Kilometrazhi</label>
                        <p>{car.kilometrazhi}</p>
                    </div>
                    <div className="car-details">
                        <label>Qyteti</label>
                        <p>{car.qyteti}</p>
                    </div>
                    <div className="car-details">
                        <label>Karburanti</label>
                        <p>{car.karburanti}</p>
                    </div>
                    <div className="car-details">
                        <label>Struktura</label>
                        <p>{car.struktura}</p>
                    </div>
                    <div className="car-details">
                        <label>Targa</label>
                        <p>{car.targa}</p>
                    </div>
                    <div className="car-details">
                        <label>Transmetuesi</label>
                        <p>{car.transmetuesi}</p>
                    </div>
                    <div className="car-details">
                        <label>Data e kolaudimit</label>
                        <p>{car.kolaudimi}</p>
                    </div>
                    <div className="car-details">
                        <label>Data e siguracionit</label>
                        <p>{car.siguracioni}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarDetailsScreen;