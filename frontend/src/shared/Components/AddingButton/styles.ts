import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles({
    addingBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        color: `${colors.mainFirst} !important`,
        marginLeft: '20px',
        width: '40px',
        '&:hover': {
            backgroundColor: colors.black03,
            borderRadius: '50% !important',
        }
    },
})

export default useStyles;
