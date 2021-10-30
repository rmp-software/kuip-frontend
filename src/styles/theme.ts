import { createTheme } from '@material-ui/core/styles'
import { deepOrange, orange } from '@material-ui/core/colors'

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: orange[500],
    },
    secondary: {
      main: deepOrange[900],
    },
  },
})
