import React, { useDebugValue, useState, useTransition,useDeferredValue } from 'react'
import Auth from './useAuth'


// usedebugValue : lets us to  create a hook instance in our developer tools for custom hooks;

// usetansitions :normal if we update the state - and dom both exceute at a time we can tell which is preority buy using this,

// Summary:
// In Event Handlers: React batches state updates and triggers DOM updates after the event handler completes. Both state and DOM updates are handled asynchronously, but state is updated first, followed by DOM updates.

// In useEffect: React updates the DOM first, then runs the useEffect hook. Any state updates within useEffect will cause a new render, but they don’t affect the current render.


// usedeferredValue: once the componet is updating instaed of falling back to loading component the deferredvalus is taken as  priorty , deffered value rather fallback to the supense loading state use the previous sratae
// Showing stale content while fresh content is loading 



const App = () => {
  const [count,setCount] = useState(0)
  const [items,setItems] = useState([])
  const [isPending,startTranisition]=useTransition()
  const defferedcount = useDeferredValue(count)

   const onhandleClick = ()=>{
    
       setCount(count+1);
    startTranisition(()=>{
      const myArr = Array(20000).fill(1).map((el,i)=>(count+200000) -i)
      setItems(myArr)

    })

   }


  return (
    <div>
      <button onClick={onhandleClick}>{count}</button>
      {/* {isPending ?<p>Loading...</p>:null} */}
      <ul>
       <p>defferentCount:{count}</p>
        {
        items.map((el,i)=>{
            return <li key={i}>{el}</li>
          }) 
         
        }
      </ul>
    </div>
  )
}

export default App