import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles({
    removeBtn: {
        lineHeight: '40px',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',
        textAlign:"center",
        '&:hover': {
            color: `${colors.red} !important`,
        },

    }
})

export default useStyles;
