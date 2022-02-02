import { purple, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];


const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        error: {
            main: dangerColor,
        }
    },
    components: {
        MuiFab: {
            styleOverrides: {
                sizeSmall: {
                    backgroundColor: 'red',
                }
            }
        }
    }
});

export default theme;