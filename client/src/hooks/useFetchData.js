import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [value, setValue] = useState();    
      
    useEffect(() => {
        const getValues = () => {
            axios
                .get('http://localhost:5000/api/players')
                .then(response => {
                    setValue(response);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getValues();
    },[])

    return([value, setValue])
}

export default useFetchData;