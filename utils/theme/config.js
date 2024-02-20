import {createTheme} from '@mui/material'

const muiTheme = {
    palette: {
        primary: {
            main: '#004e8a',
        },
        secondary: {
            main: '#1e5c0a',
        }
    }
}

const theme = createTheme(muiTheme)

export {theme}