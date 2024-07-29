import axios from 'axios'
import './Header';
import react, { useState } from 'react'
import React from 'react'
import './LoginRegister.css';

export default function Product() {

    const [product,setProduct] = useState('')
    const [price,setPrice] = useState('')
    const [desc,setdesc] = useState('')
    const [photo,setPhoto] = useState('')

    async function  getData(e){
        e.preventDefault()
        let data= {product , price ,desc, photo}
        console.log(data)

        let formData= new FormData()
        formData.append("product",product)
        formData.append("price",price)
        formData.append("desc",desc)
        formData.append("photo",photo)

        const config ={
            headers : {
                "Content-Type": "multipart/form-data"
            }
        }

        let result = await axios.post("http://localhost:7000/createProduct", formData, config)
    }
  return (
    <>
    
    
    <div className='wrapper'>
        <div className="form-box register">
            <form action='' onSubmit={getData} >
                <h1>Create Product</h1>
                <div className="input-box">
                 <input type='text' name="product"     onChange={(e) => setProduct(e.target.value)} placeholder='Product Name' required />
                      
                    </div>
                <div className="input-box">
                <input type='number' name="price"  onChange={(e) => setPrice(e.target.value)} placeholder='Price' required />
                   
                </div>
                <div className="#">
                <input type='file' name="photo"  onChange={(e) => setPhoto(e.target.files[0])} placeholder='Photo' required />
                </div>

                <div className="input-box">
                <input type='text' name="desc"  onChange={(e) => setdesc(e.target.value)} placeholder='Description' required />
                </div>
        
                <button type='submit'>Create Product</button>
              
            </form>
        </div>
        </div>
     
    </>
  )
}
