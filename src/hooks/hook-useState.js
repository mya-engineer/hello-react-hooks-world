import React, { useState } from 'react'

function computeInitCounter() {
  console.log('Some calculations')
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState(computeInitCounter)

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  })

  function increment() {
    setCounter((prev) => prev + 2)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: 'Новый title',
      }
    })
  }

  return (
    <div className='w-100'>
      <div className='mx-auto d-flex flex-column w-25'>
        <h1>Счетчик: {counter}</h1>
        <button onClick={increment} className='btn btn-success mb-1'>
          +
        </button>
        <button onClick={decrement} className='btn btn-danger mb-1'>
          -
        </button>
        <button onClick={updateTitle} className='btn btn-dark mb-1'>
          Изменить название
        </button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
