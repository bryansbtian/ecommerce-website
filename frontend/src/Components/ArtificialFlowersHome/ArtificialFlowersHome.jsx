import React, { useEffect, useState } from 'react'
import './ArtificialFlowersHome.css'
import Item from '../Item/Item'

const ArtificialFlowersHome = () => {

    const [artificial,setArtificial] = useState([]); 

    useEffect(()=>{
        fetch('http://localhost:4000/artificial')
        .then((response)=>response.json())
        .then((data)=>setArtificial(data));
    },[])

    return (
        <div className='artificial-flowers-home'>
            <h1>Artificial Flowers</h1>
            <hr />
            <div className="artificial-flowers-home-item">
                {artificial.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default ArtificialFlowersHome