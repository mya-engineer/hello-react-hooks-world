import React, { useState } from 'react'
import { useEffect } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log('value changed')
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: { value, onChange },
    value,
    clear,
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
    <div className='container pt-3'>
      <input type='text' {...input.bind} />
      <input type='text' {...lastName.bind} />
      <h1
        onClick={() => {
          input.clear()
          lastName.clear()
        }}>
        {input.value} {lastName.value}
      </h1>
    </div>
  )
}

export default App
