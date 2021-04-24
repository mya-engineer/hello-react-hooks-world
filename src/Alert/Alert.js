import React from 'react'
import { useAlert } from './AlertContext'

export default function Alert() {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div className='alert alert-danger' onClick={alert.hide}>
      <span>
        Это очень супермегагипер важное сообщение
        <br />
        {alert.text}
      </span>
    </div>
  )
}
