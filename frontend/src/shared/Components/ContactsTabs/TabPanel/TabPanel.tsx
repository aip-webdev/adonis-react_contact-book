import React from 'react';
import Box from "@mui/material/Box";
import useStyles from './styles';
import {useMediaSize} from "../../../../hooks/useMediaSize";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export const TabPanel = React.memo((props: TabPanelProps) => {
    const {children, value, index, ...other} = props;
    const classes = useStyles();
    const {isSm} = useMediaSize()
    const a11yProps = (isSm: boolean, index: number) => (isSm ?
        {
            id:`simple-tabpanel-${index}`,
            'aria-labelledby':`simple-tab-${index}`
        } :
        {
            id:`vertical-tabpanel-${index}`,
            'aria-labelledby':`vertical-tab-${index}`
        });
    return (
        <div
            className={classes.tabPanel}
            role="tabpanel"
            hidden={value !== index}
            {...a11yProps(isSm, index)}
            {...other}
        >
            {value === index && (
                <Box className={classes.box}>
                    {children}
                </Box>
            )}
        </div>
    )
})
