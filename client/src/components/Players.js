import React from 'react';
import useFetchData from '../hooks/useFetchData';

const Players = () => {
    const [data, setData] = useFetchData([]);

    return (        
        <div>
            {console.log(data)} 
        </div>
    )
}

export default Players;
