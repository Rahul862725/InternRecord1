import React from 'react'
import { useSelector } from 'react-redux'
import '../css/navbar.css'

export default function Navbar() {
  const enable = useSelector(state=>state.enable);
  return (
    <div className="nav">
        <img src={require("../images/bg.png")} alt="Background"/>
        <p>Encrypt Decryupt using Enchanced AES</p>
        { enable==0?
        <ul className="list">
        <li><Link to='/login'>Signup</Link></li>
         <li><Link to='/signup'>Signup</Link></li>
        </ul>:
        (
          <ul className="list">
          <li><Link to ='/encrypt'>Encrypt</Link></li>
         <li><Link to ='/decrypt'>Decrypt</Link></li>
        </ul>
        )
        }
    </div>
  )
}
