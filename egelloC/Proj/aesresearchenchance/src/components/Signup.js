import {React,useState} from 'react'
import './style.css'
import {   useNavigate } from 'react-router';
import axios from 'axios';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default function Singup(props) {

    const url = "http://localhost:4000/signup"
    const naviagte=useNavigate();
    const [status, setStatus] = useState("");
    
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

   function handle(e)
    {
        let newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
    }

    function submit(e)
    {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password
        }).then(res => {
            console.log(res)
            if(res.data==2)
            {
                setStatus("Already Registered!")
            }
            else if(res.data){
                setStatus("")
            naviagte('/login')
            }
            else
            setStatus("Internal Server Error")

        })
    }
    const mystyle={
        backgroundColor:props.backgroundColor,
        color:props.color,
        borderColor:props.color
        
    }
    return (
        <div  className="container" >
            <div className='design' style={mystyle}>
        <Form  onSubmit={submit}>
        <h2 style={{marginTop:"40px"}}>SIGNUP PAGE</h2>
        <div   style={{fontWeight:"bold",marginBottom:"20px", marginTop:"20px",color:"rgb(60, 60, 232)", fontSize:"30px"}}>{status}</div>
            <Form.Group className="mb-3"  >
                <Form.Label>Name</Form.Label>
                <Form.Control style={{width:"300px", borderRadius:"10px",border:"4px solid black"}} onChange={(e) => handle(e)} id="name" value={data.name} type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3"  >
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{width:"300px", borderRadius:"10px",border:"4px solid black"}} onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control style={{width:"300px", borderRadius:"10px",border:"4px solid black"}} onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Password" />
            </Form.Group>

            <div>
            <Button style={{backgroundColor:"rgb(7, 7, 7)", fontWeight:"bold",margin:"20px", width:"100px", borderRadius:"10px"}} type="submit">
                Submit
            </Button>
            <Button onClick={()=>{naviagte('/login')}} style={{backgroundColor:"rgb(7, 7, 7)", fontWeight:"bold", width:"100px", borderRadius:"10px"}}  >
                Login
            </Button>
            </div>

        </Form>
        </div>
        </div>
    )
}
