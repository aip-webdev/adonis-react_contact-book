import colors from "../../../utils/enums/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
    container: {
        display: 'grid !important',
        placeItems: 'center',
        height: '100vh',
        padding: '0 !important'
    },
    box: {
        width: '320px',
        height: '460px',
        display: 'flex',
        padding: '62px',
        boxShadow: '0 0 12px rgb(0 0 0 / 50%)',
        fontWeight: '500',
        borderRadius: '3%',
        flexDirection: 'column',
        backgroundColor: '#124559',
        minWidth: '320px'
    },
    input: {
        marginBottom: '2rem !important',
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            borderColor: `${colors.mainSecond06}`,
            borderWidth: '1.5px !important',
        },
    },
})

export default useStyles;
