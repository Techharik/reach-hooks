import React, { useCallback, useEffect, useMemo, useState } from 'react'

//  usecallback - prevent the function recreation every time possible.
// if the function is updating the state - if premitive repeated value stopes automatically, but refernece type then we need use useCallback from stop the equation.


//memo from react prevent the child component from rendering when parent componnet is get updated,

//use callback - memoize functions,
//use memo - memoize value,
//memo - prevent the child for re-rendering.



// callback hooks in react:
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [result,setResult] = useState(0);


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