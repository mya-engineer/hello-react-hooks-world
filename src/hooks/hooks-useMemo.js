import React, { useState, useEffect, useRef, useMemo } from 'react'

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  console.log('funcd')
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(
    () => ({
      color: colored ? 'darkred' : 'black',
    }),
    [colored]
  )

  const computed = useMemo(() => complexCompute(number), [number])
  // const computed = complexCompute(number)

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className='btn btn-success'
        onClick={() => setNumber(prev => prev + 1)}>
        Add
      </button>
      <button
        className='btn btn-danger'
        onClick={() => setNumber(prev => prev - 1)}>
        Remove
      </button>
      <button
        className='btn btn-warning'
        onClick={() => setColored(prev => !prev)}>
        Change
      </button>
    </div>
  )
}

export default App
