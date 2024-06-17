import React, { useState } from 'react'
import "../Userlist/Userlist.css"
import{Link} from "react-router-dom"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForeverOutlined } from "@material-ui/icons"
const Userlist = () => {
  const handledelete=(id)=>{
    setdata(data.filter((item)=> item.id!==id))

  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Username', headerName: 'username', width:90, renderCell:(params)=>{
            return <div className='user'>
                <img  className='userimg' src={params.row.Avatar} alt="img " />
                  <span className='name'>  
                     {  params.row.Username}
                    </span>
            </div>
        } },
        { field: 'email', headerName: 'email', width: 90 },
        { field: 'status', headerName: 'status', width: 90 },
        { field: 'transcation', headerName: 'transcation', width: 90 },
        { field: 'Action', headerName: 'Action', width: 90, renderCell :(params)=>{
          return <div className='btn'>
          <Link to={"/user/"+ params.row.id}>
            <button className='useredit'> Edit</button>
          </Link>
            <DeleteForeverOutlined className='userdelete' onClick={()=>handledelete(params.row.id)}/>
          </div>
        } },
    
        {
          field: 'id',
          headerName: 'Id',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 150,
        },
        {
          field: 'Username',
          headerName: 'Username',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
        },
        {
          field: 'email',
          headerName: 'Email',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width:200,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width:190,
        },
        {
          field: 'transcation',
          headerName: 'Transaction',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
        },
        {
          field: 'Action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
        },
      ];
      
  const rows = [
    { id: 1, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 2, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 3, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 4, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 5, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 6, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    { id: 7, Username: 'John', Avatar:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",email:'john@gmail.com',status:'active',transcation:'$120.22' },
    
  ];
  const[data,setdata]=useState(rows)
  
  return (
    <div className='userlist'>
      
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        checkboxSelection
        
      />
    </div>
    

  )

  
}

export default Userlist