import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const MyTable = () => {
   
    const dispatch=useDispatch();
    const [datas,setDatas]=useState([]);

    const {id}=useParams();
    

    useEffect(()=>{
         getdata();
    },[])

    const getdata=async()=>{
        const res=await fetch("http://localhost:5000/data");
        const json= await res.json();
        setDatas(json.myData);
    }
    const deleteUsersByid=async(id)=>{
          try{
             return await axios.delete("http://localhost:5000/"+id);
          }
          catch(e){
            console.log(e);
          }
    }
  return (
    <div>
      <TableContainer component={Paper} sx={{width:"670px",marginLeft:"440px",marginTop:"50px"}} >
        <Table sx={{minWidth:"300px"}} aria-aria-label='simple table'></Table>
        <TableHead>
            <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>LAST_NAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>EDIT</TableCell>
                <TableCell>DELETE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {datas.map((row)=>{
                return(
                <TableRow>
                    <TableCell>
                       {row.name}
                    </TableCell>
                    <TableCell>
                        {row.LastName}
                    </TableCell>
                    <TableCell>
                        {row.Email}
                    </TableCell>
                    <TableCell>
                       <Link to={"/edit/"+row._id}> <Button variant='contained'>Edit</Button></Link>
                    </TableCell>
                    <TableCell>
                    <Button variant='contained' sx={{backgroundColor:"violet"}} onClick={()=>{
                      deleteUsersByid(row._id)
                    }}>Delete</Button>
                    </TableCell>
                </TableRow>
           ) })}
        </TableBody>
      </TableContainer>
    </div>
  )
}

export default MyTable;