import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AllProduct() {

    const [data, setdata] = useState([])

    async function getData() {
        let result = await fetch("http://localhost:7000/getproducts")
        result = await result.json()
        setdata(result)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>All Products</h1>

            <div className="#">
                {
                    data?.map((i) =>
                        <>
                            <Card style={{ width: '18rem' }} className='#'>
                                <Card.Img variant="top" src={`http://localhost:7000/uploads/${i.photo}`} className='#' />
                                <Card.Body>
                                    <Card.Title>{i.product}</Card.Title>
                                    <Card.Text>
                                        Rs.{i.price}/-
                                    </Card.Text>
                                    <Card.Text>
                                        {i.desc}
                                    </Card.Text>
                                    <Button variant="primary"><Link to={`/productdetail/${i._id}`} className='#'>View Details </Link></Button>
                                </Card.Body>
                            </Card >
                        </>

                    )
                }
            </div >



        </>
    )
}