import React, { useEffect, useState } from 'react'
import './Header';
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
    const [data, setdata] = useState("")

    let { id } = useParams();


    let getSingleProduct = async () => {
        let result = await fetch(`http://localhost:7000/singleproduct/${id}`)
        result = await result.json()
        setdata(result)
    }

    useEffect(() => {
        getSingleProduct()
    }, [])


    return (
        <>


            <div className="productDetail">

                <div>
                    <img src={ `http://localhost:7000/uploads/${data.photo} `} alt="" />
                </div>
                <h3>{data.product}</h3>
                <p><b>price : {data.price}</b></p>
                <p><b>Description :{data.desc} </b></p>

            </div>

        </>
    )
}