import React from 'react'
import { useAlert } from './Alert/AlertContext'

export default function Main() {
  // const { toggle } = useAlert() // useContext
  const { show } = useAlert() // useReducer

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button
        onClick={() => show('Я текст из мейна.жс!')}
        className='btn btn-success'>
        Показать alert
      </button>
      {/* <h1>Привет в примере с Context</h1>
      <button onClick={toggle} className='btn btn-success'>
        Показать alert
      </button> */}
    </>
  )
}
