import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: ""
    },
    palette: {
        primary: {
            main: "#3d2326",
            contrastText: "#ffcfbf",
        },
        secondary: {
            main: "#ffaf95",
            contrastText: "#787878",
        }
    }
})

export default theme