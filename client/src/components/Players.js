import React from 'react';

const Players = (props) => {

    return (        
        <div>
            <div className='lines title'>
                <p className='rank'>Rank</p>
                <p className='name'>Name</p>
                <p className='country'>Country</p>
            </div>
            {props.data.map(info => (
                <div className='lines' key={info.id}>
                    <p className='rank'>{info.id + 1}</p>
                    <p className='name'>{info.name}</p>
                    <p className='country'>{info.country}</p>
                </div>
            ))}
        </div>
    )
}

export default Players;
