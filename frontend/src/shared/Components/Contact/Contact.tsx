import {Divider, Grid, Typography} from '@mui/material';
import React from 'react';
import {IContact} from "../../../../types/global";
import {LetterAvatar} from "../LetterAvatar";
import useStyles from "./styles";
import {RemoveButton} from "../RemoveButton";

interface IContactProps {
    contact: IContact,
    onClickRemoveBtn: (contact: IContact) => void
}

export const Contact = React.memo(({contact, onClickRemoveBtn}: IContactProps) => {
    const { email, name, lastName, tel} = contact
    const classes = useStyles()
    const handleClickBtn = () => {
        onClickRemoveBtn(contact)
    }
    return (
        <>
            <Grid
                spacing={2}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ margin: '0 -1em 1em !important',}}
            >
                <Grid item xs={2} md={1}><LetterAvatar firstName={name} lastname={lastName && lastName}/></Grid>
                <Grid item xs><Typography className={classes.title}>{name}</Typography></Grid>
                {lastName && <Grid item xs><Typography className={classes.title}>{lastName}</Typography></Grid>}
                <Grid item xs><Typography className={classes.title}><a href={`mailto:${email}`}>{email}</a></Typography></Grid>
                {tel && <Grid item xs><Typography className={classes.title}><a href={`tel:${tel}`}>{tel}</a></Typography></Grid>}
                <Grid item xs={2} md={1}><RemoveButton onClickRemoveBtn={handleClickBtn}/></Grid>
            </Grid>
            <Divider />
        </>
    )
})
