import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NurseInfo = () => {
    const {Id} =useParams();
    const [data,setData] = useState([]);
    const [singleInfo,setSingleInfo]=useState({})

    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/management')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    useEffect( () => {
        const foundData=  data.find(singleInfo => singleInfo._id === Id)
        setSingleInfo(foundData)
    },[data])
    return (
        <div className='container my-3 doctor-box'>
            <img className='images' src={singleInfo?.images} alt=''/>
            <h1>Name: {singleInfo?.name}</h1>
            <h5>Email:  {singleInfo?.email}</h5>
            <h5>Phone:  {singleInfo?.phone}</h5>
            <p>Description: {singleInfo?.description}</p>
            <h3>Expert: {singleInfo?.expert}</h3>
        </div>
    );
};

export default NurseInfo;