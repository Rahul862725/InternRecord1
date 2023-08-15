import React, { useEffect, useState, useRef} from 'react'
import Message from './Message'
import axios from 'axios'
import autosize from 'autosize';
import './Chat.css'


export default function Chat(props) {
  const urlget = 'http://localhost:3001/all'
  const urlpost = 'http://localhost:3001/add'

  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue ] = useState("");
  const [data, setData] = useState ([""])
  console.log(data)

  useEffect(() => {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);
  useEffect(()=>{
     getAllMessage()
  },[])
   
  const getAllMessage = async ()=>{
   
    let data = await axios.post(urlget, {
      name: props.title
    })
    data = await data.data
    setData(data)
   }

   const sumbitButton = async (e)=> {
    e.preventDefault();
    await axios.post(urlpost,{
      name: props.title,
      message:currentValue
    })
    setCurrentValue("")
    getAllMessage()
   }

  return (
    <div style={{border: "2px solid black", width:"50%",height:'100vh',padding:'20px', overflow:'scroll'}}> 
    <h2>{props.title}</h2>
    {data.map((el)=> <Message message = { el.message } />)}
    
    {/* <input type='text' onChange={(e)=>storeText(e)}/> */}
    <textarea
            ref={textareaRef}
            className = 'textArea'
           
            value={currentValue}

            onChange={e=>{
            setCurrentValue(e.target.value);
            }}
            placeholder = 'Enter Your Text'
        />
        <form style={{margin:"10px"}} onSubmit = {(e)=>sumbitButton(e)}>
          <button>Submit</button>
        </form>
    {/* <input type = 'button' style={{margin:"10px"}} onSubmit={(e)=>sumbitButton(e)} value = "Submit" /> */}
    </div>
  )
}
