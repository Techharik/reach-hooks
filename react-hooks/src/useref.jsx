import React, { useRef } from 'react'

// useRef - direct manipulation of dom,
// render and reRendering not happens in useRef.
// work with imperative programming.


const App = () => {
  const refder = useRef();


  return (
    <div ref={refder}>
       <button onClick={()=>refder.current.style.backgroundColor="red"}>gg</button>
    </div>
  )
}

export default App