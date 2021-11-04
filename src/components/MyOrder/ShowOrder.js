import React from 'react';

const ShowOrder = ({service}) => {
    const {name,price,images,description,_id} = service;
    const handleDelete =id =>{
        const url =`https://whispering-hollows-15183.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='service pb-3'>
            <img className='images' src={images} alt='' />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            
            <p className='px-3 py-2'>About: {description?.length>30?description.slice(0,100)+"...":description}</p>
            
            <button onClick={()=> handleDelete(service._id)} className='btn btn-warning'>Delete {name} </button>
            
        </div>
    );
};

export default ShowOrder;
