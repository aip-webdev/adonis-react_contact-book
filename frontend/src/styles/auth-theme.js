import { createTheme } from "@mui/material/styles";
import colors from "../utils/enums/colors";

const authTheme = createTheme({
  breakpoints: {
    values: {
      xs:0,
      sm:320,
      md:640,
      lg:1040,
      xl:1440
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
          fontWeight: '400',
          backgroundColor: colors.mainSecond06,
          width: '100vw',
          overflow: 'hidden',
          margin: '0 0 0 0',
          height: '100vh',
        },
      }
    }
  },
  palette: {
    secondary: {
      main: colors.mainFirst,
      contrastText: colors.mainFirst,
    },
    primary: {
      main: colors.mainSecond06,
      contrastText: colors.mainFirst,
    },
    text: {
      primary: colors.mainSecond,
      secondary: colors.mainSecond,
      disabled: colors.black06,
    }
  }
});

export default authTheme;
