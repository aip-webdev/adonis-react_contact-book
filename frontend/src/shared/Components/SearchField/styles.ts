import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    formControl: {
        minWidth: '140px !important',
        margin: '0 auto 0 0 !important',
        position: 'relative',
        minHeight: '50px',
    },
    textField: {
        '& .MuiInputLabel-root, .MuiOutlinedInput-root': {
            color: colors.mainSecond,
            '&.Mui-focused': {
                color: colors.mainSecond,
            }
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            borderColor: `${colors.mainSecond} !important`,
            borderWidth: '1.5px !important',
        },
        '& .MuiOutlinedInput-input': {
            paddingRight: '35px'
        }
    },
    searchIcon: {
        color:colors.mainSecond,
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)'
    },
})

export default useStyles;
