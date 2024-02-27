import React, { useEffect, useState } from 'react'
import InvestorService from '../service/InvestorService'

const Listinvestors = () => {
    const [investorArray,setInvestorArray]=useState([])
    useEffect(()=>{
        InvestorService.getAllinvestors().then((Response)=>{
            setInvestorArray(Response.data);
            console.log("response recevied from APi",Response.data)
        })
    },[])
    //const [state variable,function that canListinvestors chnage the state variable]
  return (
    <div className='container'>
        {console.log("application render")}
      <h2 className='text-center'>Investor Data</h2>
      <table className="table table-bordered table-striped">
        <thead>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email Id</th>
            <th>City</th>
            <th>DateOfBirth</th>
            <th>pancardNumber</th>
            <th>Gender</th>
            <th>contactNumber</th>
            <th>accountNumber</th>
            <th>ifscCode</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                investorArray.map((investor,key)=><tr key={key}>
                    <td>{investor.id}</td>
                    <td>{investor.firstname}</td>
                    <td>{investor.lastname}</td>
                    <td>{investor.email}</td>
                    <td>{investor.city}</td>
                    <td>{investor.dob}</td>
                    <td>{investor.pancardNumber}</td>
                    <td>{investor.gender}</td>
                    <td>{investor.contactNumber}</td>
                    <td>{investor.accountNumber}</td>
                    <td>{investor.ifscCode}</td>
                    <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">Edit</button>
                    <button className="btn btn-danger mx-2">Delete</button>
                </td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default Listinvestors
