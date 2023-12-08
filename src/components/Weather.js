import React, { Component } from 'react';

const Weather = props => {
    return (
        <div >
                { props.city &&
                <div className='weather'>
                    <p>ՎԱՅՐԸ: {props.city}</p>
                    <p>{props.country}</p>
                    <p>ՕԴԻ ՋԵՐՄԱՍՏԻՃԱՆԸ: {props.temp}</p>
                    <p>ՕԴԻ ՃՆՇՈՒՄԸ: {props.pressure}</p>
                    <p>ԱՐևԻ ՄԱՅՐԱՄՈՒՏԸ: {props.sunset}</p>
                </div>
                }
                <p>{props.error}</p>
            </div>
    )
}

export default Weather;
