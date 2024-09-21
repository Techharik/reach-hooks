import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Modal = (props,ref) => {
  const [modalState , setModalState]= useState(false);

  useImperativeHandle(ref,()=>({
     openModal:()=>setModalState(true)
  }));

  if (!modalState ) return null;

  return (
    <div>Modal</div>
  )
}

export default forwardRef(Modal) 