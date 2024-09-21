import React, { useReducer, useState } from 'react'


const reducer = (state, action)=>{
  
  switch(action.type){
    case "increment":
      return {...state,count:state.count+1}
    
    case "decrement":
      return {...state,count:state.count - 1}
   
    
    default:
      throw new Error();
  }

          
}


const App = () => {
  const [state , dispatch] = useReducer(reducer ,{count:0 , color:false})
  // const [count,setCount] = useState(0)
  // const [color,setColor] = useState(false)

  return (
    <div>
         <div>{state.count}</div>
         <button onClick={()=>dispatch({type:"increment"})}>i</button>
         <button onClick={()=>dispatch({type:"decrement"})}>d</button>
    </div>
  )
}

export default App