import React, { useEffect, useState } from 'react'
import './FreshFlowersHome.css'
import Item from '../Item/Item'

const FreshFlowersHome = () => {

    const [fresh,setFresh] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/fresh')
        .then((response)=>response.json())
        .then((data)=>setFresh(data));
    },[])

    return (
        <div className='fresh-flowers-home'>
            <h1>Fresh Flowers</h1>
            <hr />
            <div className="fresh-flowers-home-item">
                {fresh.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default FreshFlowersHome