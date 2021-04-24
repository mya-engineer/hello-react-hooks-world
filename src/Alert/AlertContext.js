import React, { useState } from 'react'
import { useContext, useReducer } from 'react'

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext)
// }

export const useAlert = () => {
  return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text }
    case HIDE_ALERT:
      return { ...state, visible: false }
    default:
      return state
  }
}

export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(false)
  // const [alert, setAlert] = useState({
  //   visible: false,
  //   text: '',
  // })
  // это для useContext
  // const toggle = () => setAlert(prev => !prev)

  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
  })

  const show = text => dispatch({ type: SHOW_ALERT, text })
  const hide = () => dispatch({ type: HIDE_ALERT })
  // const show = text => setAlert({ ...alert, text, visible: true })
  // const hide = () => setAlert({ ...alert, visible: false })

  return (
    <AlertContext.Provider
      value={{
        // visible: alert.visible, // useContext
        // text: alert.text, // useContext
        // toggle, // useContext
        visible: state.visible, // useReducer
        text: state.text,
        show,
        hide,
      }}>
      {children}
    </AlertContext.Provider>
  )
}
