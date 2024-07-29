// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';

// export default function API() {


//   const [data, setdata] = useState({})
//   async function getdata() {


//     let result = await fetch("https://jsonplaceholder.typicode.com/users")
//     result = await result.json();
//     setdata(result)
//     console.log(data)
//   }
//   useEffect(() => {
//     getdata();
//   }, []

//   )
//   return (
//     <div className="table">
//       <h1>Api Integration</h1>
//       <button onClick={getdata}> fetch the data </button>

//       {
//         data?.map((i) =>
//           <p> {i.name} </p>
//         )
//       }


//       <Table striped bordered hover>
//         <thead>
//           <tr>

//             <th>ID</th>
//             <th>Name</th>
//             <th>email</th>
//             <th>Phone</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((data) =>
//               <tr>
//                 <td>{data.id}</td>
//                 <td>{data.name}</td>
//                 <td>{data.phone}</td>
//                 <td>{data.website}</td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }


import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';

export default function Api() {
    const[data,setdata] = useState([])

    async function getdata(){
      let result = await fetch("https://jsonplaceholder.typicode.com/users")
      result = await result.json();
      setdata(result)
      console.log(data)
    }

  useEffect(()=>{
    getdata();
  },[])    

  return (
    <>
        <h1>Api integration</h1>

        <button onClick={getdata}>Fetch data</button>

        <div className="Table">
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        
          </tr>
        </thead>
        <tbody>
       {
          data.map((data)=>
          <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                
                
          </tr>
          )
       }
        </tbody>
      </Table>
        </div>

    
    </>
  )
}