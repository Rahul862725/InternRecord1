import React, {useState, useEffect} from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setEnable } from '../Redux/Enable'
import { setAESData } from '../Redux/AesData'
import { useNavigate } from 'react-router'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Encrypted() {
   
  const [data,setData] =useState("")
  
  const aesData = useSelector(state=>state.aes)
  const dispatch =useDispatch()
  
  

  useEffect(()=>{
     dispatch(setEnable(1)) 
  },[])

  const onEncClick = (e)=>{
    e.preventDefault()
       axios.post('http://localhost:4000/encrypt',{
        encData:data,
        id: window.localStorage.getItem('userid'),
       }).then((res)=>{
        dispatch(setAESData(res.data))
       })
      
      
  }

  const handle = (e)=>{
        setData(e.target.value)
  }
   
  return (
    <div className='content'>
      <h1>Encryption</h1>
      <Form className ="container content" onSubmit={onEncClick}>
      <h4>Enter Data For Encryption</h4>
        <textarea onChange={(e)=>handle(e)} value={data} className='textarea' id="encData" name="encData" cols="80" rows="10"></textarea>
         <button type='submit' className='btn btn-success'> Sumbit</button>
      </Form>
      <h4>Encrypted Data After Sumbit</h4>
        <textarea value={aesData} className='textarea' cols="80" rows="10" ></textarea>
        
        
   
    </div>
  )
 
}
