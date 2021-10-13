import React, { useState, createContext } from 'react'

const SnackbarContext = createContext()
const defaultState = {
  open: false,
  message: '',
  type: 'info',
  duration: 2000,
  clickAway: false
}

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbarState] = useState(defaultState)

  const setSnackbar = newState => {
    setSnackbarState(prev => {
      if (prev.open && !newState.open) {
        // For reset snackbar state after close transition
        setTimeout(() => setSnackbarState(defaultState), 400)
      }
      return {
        ...prev,
        ...newState
      }
    })
  }

  return (
    <SnackbarContext.Provider
      value={{
        setSnackbar,
        snackbar
      }}
    >
      {children}
    </SnackbarContext.Provider>
  )
}

export default SnackbarContext

export { SnackbarProvider }
