import React ,{useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function Tabledata() {
    const [data, setdata] = useState("")
    const user =[
        {name:"kabir",age: 12,city: "mumbai"},
        {name:"kabi",age: 13,city: "mubai"},
        {name:"kabir",age: 12,city: "mumbai"},
        {name:"kabir",age: 12,city: "mumbai"},
        {name:"kabir",age: 12,city: "mumbai"},
        {name:"kabir",age: 12,city: "mumbai"},
    ]
  return (
    <>
        <h1> API Integration</h1>
       
{/*         
    {
        user.map((data)=>
            <>
            <p> {data.name} </p>
            <p> {data.age} </p>
            </>
    )
    }

 */}
<div className="table">
<Table striped bordered hover>
      <thead>
        <tr>
       
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
    {
                user.map((data)=>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.city}</td>
                    </tr>
                )
    }
        </tbody>
    </Table>
    </div>

    </>
  )

  
}
