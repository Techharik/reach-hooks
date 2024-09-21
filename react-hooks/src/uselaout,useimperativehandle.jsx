import React, { useRef } from 'react'
import Modal from './Modal';
// useEffect - will delay the process of changes. first update the state async go for ui update.

// useLayoutEffect - will update the ui and state at time synchornous.

// mode of us is whever you don't want see the traitional happing in ui you can use it.

// use imperativehandle - breaking the unidirectional flow.

// eventhour the openModal function is not in the parent component we are accessing the function upwards using 
// step 1 : create a ref and attach to the child component
// step 2 create a useimperativehandle in chaild component , write the {} property and menthod
// incorder to access it from child to pratent - ret the forward ref in exprot default
// now in parent componet we can access the method and object ref.current.methodname()

const App = () => {
  const modalref = useRef();

  const onhanldeClick=()=>{
    modalref.current.openModal()
  }


  return (
    <div>
      <Modal ref={modalref} />
      <button onClick={onhanldeClick}>open</button>
    </div>
  )
}

export default App