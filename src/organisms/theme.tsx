import { createTheme } from "@mui/material";
import { darken } from "polished";


const theme=createTheme({
    palette:{
        primary:{
            main:"#f44336"
        },
        secondary:{
            main: "#1976d2"
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    background:'#00796b',
                    color: '#ffffff',
                    '&:hover': {background: darken(0.15, '#00796b')}, 
                }
            }
        }
    }
})

export default theme;