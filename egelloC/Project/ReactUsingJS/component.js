import { useState, useEffect, useMemo} from './MyReact.js'


export default function component({ props, button }) {
  const [count, setCount] = useState(props)
   
  const propCountDouble = useMemo(()=>{
    console.log("In Memo")
    return props*2
  },[props])
  setTimeout(()=>{
   setCount(c=>c+1)
  },1000)
  console.log(button)
  useEffect(()=>{
    const handler = ( ) => setCount(c=>c+1)
    button.addEventListener('click',handler)

    return ()=>button.removeEventListener('click', handler)
  }, [button])
 
  return `
  State: ${count}
  Prop: ${props}
  Prop Double: ${propCountDouble}
  `
}