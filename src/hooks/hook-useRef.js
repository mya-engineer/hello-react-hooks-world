import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h1>Предыдущее value: {prevValue.current}</h1>
      <input
        type='text'
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button className='btn btn-success' onClick={focus}>
        Focus
      </button>
    </div>
  )
}

export default App
