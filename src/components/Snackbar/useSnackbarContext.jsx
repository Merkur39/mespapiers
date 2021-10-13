import { useContext } from 'react'
import SnackbarContext from 'src/components/Snackbar/SnackbarProvider'

export const useSnackbarContext = () => {
  const snackbar = useContext(SnackbarContext)
  if (!snackbar) {
    throw new Error('SnackbarContext must be used within a SnackbarProvider')
  }

  return snackbar
}
