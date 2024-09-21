import React, { useCallback, useEffect, useMemo, useState } from 'react'

// callback hooks in react:
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [result,setResult] = useState(0)
  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo =useCallback(() => {
  //   console.log('I am Created')
  //   return [2,3];
  // },[])

  const addTodo =useMemo(() => {
    console.log('I am Created')
    return [2,3];
  },[])

  
  useEffect(()=>{
      console.log(addTodo ,'the value is')
      setResult(addTodo)
      // fetchData()
  },[])

//  usecallback - prevent the function recreation every time possible.
// if the function is updating the state - if premitive repeated value stopes automatically, but refernece type then we need use useCallback from stop the equation.


  return (
    <>
      {/* <Todos todos={todos} addTodo={addTodo} /> */}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App