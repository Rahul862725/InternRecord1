import React from 'react'
import { useSelector } from 'react-redux'
import {  Link } from "react-router-dom";
import '../css/navbar.css'

export default function Navbar() {
  const enable = useSelector(state=>state.enable);
  return (
    <div className="nav">
        <a href='/'><img style={{height:'140px', marginLeft:'30px'}} src={require("../images/bg.png")} alt="Background"/></a>
        <h1 style={{color:'white'}}>Encrypt Decryupt using Enchanced AES</h1>
        { enable==0?
        <ul className="list">
        <li className='link'><Link style={{color:'white', textDecoration:'none',margin:'10px'}} to='/login'>Login</Link></li>
         <li className='link'><Link style={{color:'white',  textDecoration:'none', margin:'10px'}} to='/signup'>Signup</Link></li>
        </ul>:
        (
          <ul className="list">
         <Link to ='/encrypt' style={{color:'white',  textDecoration:'none', margin:'10px'}}> <li className='link' >Encrypt</li></Link>
         <li className='link'><Link style={{color:'white',  textDecoration:'none', margin:'10px'}} to ='/decrypt'>Decrypt</Link></li>
        </ul>
        )
        }
        
    </div>
  )
}
