import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEnable } from '../Redux/Enable'
import './style.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Decrypted() {
  const [data,setData] =useState("")
  const [data1,setData1] = useState("")
 
  const dispatch =useDispatch()

  useEffect(()=>{
      dispatch(setEnable(1)) 
 },[])

  const onDecClick = (e)=>{
    e.preventDefault()
       axios.post('http://localhost:4000/decrypt',{
        decData:data,
        id:window.localStorage.getItem('userid'),
       }).then((res)=>{
        setData1(res.data)
       })
  }

  const handle = (e)=>{
        setData(e.target.value)
  }
   
  return (
    <div className='content'>
      <h1>Decryption</h1>
      <Form onSubmit={onDecClick} className="container content">
      <h4>Enter Encyrpted Data (only for this website)</h4>
        <textarea onChange={(e)=>handle(e)} value={data} className='textarea' id="decData" name="decData" cols="80" rows="10"></textarea>
         <button className='btn btn-success' type='submit'> Sumbit</button>
      </Form>
      <h4>Decrypted Data After Sumbit</h4>
        <textarea value={data1}  className='textarea' cols="80" rows="10"></textarea>
    </div>
  )
}
