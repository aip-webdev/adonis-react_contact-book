import React from 'react';
import {Box} from "@mui/material";
import useStyles from "./styles";
import {ContactsTabs} from "../../Components/ContactsTabs";
import {RequiredAuth} from "../../Components/RequiredAuth";

export const ContactsPage = () => {
    const classes = useStyles()
    return (
        <RequiredAuth>
            <Box className={classes.box}>
                <ContactsTabs/>
            </Box>
        </RequiredAuth>
    )
}
