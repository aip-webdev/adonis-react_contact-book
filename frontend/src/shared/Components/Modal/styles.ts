import {makeStyles} from "@mui/styles";
import theme from "../../../styles/main-theme";

const useStyles = makeStyles({
    modalBack: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'grid',
        placeItems: 'center',
        zIndex: '10000',
        height: '100vh',
    },
    modal: {
        backgroundColor: 'white',
        minWidth: '320px',
        maxWidth: '320px',
        position: 'relative',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            maxWidth: '100vw',
        },
    }
})

export default useStyles;
