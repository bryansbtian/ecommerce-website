import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'

const RelatedProducts = () => {

    const [latest,setLatest] = useState([]); 

    useEffect(()=>{
        fetch('http://localhost:4000/latest')
        .then((response)=>response.json())
        .then((data)=>setLatest(data));
    },[])

    return (
        <div className='relatedproducts'>
            <h1>Latest Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {latest.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts