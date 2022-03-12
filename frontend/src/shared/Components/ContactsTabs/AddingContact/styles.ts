import {makeStyles} from "@mui/styles";
import colors from "../../../../utils/enums/colors";
import theme from "../../../../styles/main-theme";

const useStyles = makeStyles({
    addingBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        width: '50px',
        // @ts-ignore
        position: 'absolute !important',
        bottom: '0 !important',
        right: '30% !important',
        [theme.breakpoints.up('md')]: {
            marginLeft: '10px',
            position: 'relative !important',
            bottom: 'initial !important',
            right: 'initial !important',
            '&:hover': {
                backgroundColor: colors.black06,
                borderRadius: '50% !important',
            }
        },
    },
    openInputFieldsButton: {
        minWidth: '40px !important',
        boxShadow: '2px 1px 2px 1px rgba(18, 69, 89, 0.9)',
        borderRadius: '50% !important',
        height: '40px',
        fontWeight: '700 !important',
        padding: '0 !important',
        textAlign: 'center',
        lineHeight: '40px !important',
        margin: '0 !important',
        transition: 'all 0.25s linear !important',
        '&:hover': {
            boxShadow: '2px 1px 2px 1px rgba(18, 69, 89, 0.9) inset',
        },


    },
    removeBtn: {
        // @ts-ignore
        position: 'absolute !important',
        bottom: '4% !important',
        left: '24% !important',
        [theme.breakpoints.up('md')]: {
            position: 'relative !important',
            bottom: 'initial !important',
            left: 'initial !important',
        },
        lineHeight: '40px',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',

        textAlign:"center",
        '&:hover': {
            color: `${colors.red} !important`,
        },

    },
    stack: {
        display: 'flex !important',
        position: 'relative',
        margin: '0 0 1em 0',
        padding: '0 0 3em 0',
        flexFlow: 'column wrap !important',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            margin: '0 1em 1em 0',
            justifyContent: 'space-between !important',
            flexFlow: 'row nowrap !important',
            alignItems: 'baseline !important',
            alignSelf: 'center',
        },
    },

    tabInput: {
        opacity: '1',
        '& .MuiOutlinesInput-root': {
            opacity: '1',
        },
        '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            border: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            height: '1rem',
            lineHeight: '1.5',
            padding: '0',
        },
        '& input[placeholder]': {
            margin: '0 0 0.5em 0',
            [theme.breakpoints.up('md')]: {
                textAlign: 'center',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '700',
                fontSize: '1rem',
                lineHeight: '1.5',
                margin: '0',
            },
        }
    }
})

export default useStyles;
