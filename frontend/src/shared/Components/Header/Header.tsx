import React, {ChangeEvent, useEffect} from 'react';
import useStyles from "./styles";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {SearchField} from "../SearchField";
import {ButtonOutlined} from "../ButtonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {Link, useNavigate} from "react-router-dom";
import {useMediaSize} from "../../../hooks/useMediaSize";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import useStore from "../../../store";

export const Header = React.memo(() => {
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const navigate = useNavigate();
    const isAuth = useStore(state => state.isAuth)
    const logout = useStore(state => state.logout)
    const searchField = useStore(state => state.searchField)
    const setSearchValue = useStore(state => state.setSearchValue)

    useEffect(() => {
        if (!isAuth) {
            navigate('/signin')
        }
    }, [])

    const handleChangeSearchField: (e: ChangeEvent) => void = (e) => {
        // @ts-ignore
        let value = e.target?.value
        setSearchValue(value)
    }
    const handleClick = () => {
        logout()
    }

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {!isSm && <Typography className={classes.title}>
                    <ContactsOutlinedIcon className={classes.title__icon}/>Contacts
                </Typography>}
                <SearchField searchTextVal={searchField} handler={(e) => handleChangeSearchField(e)}/>
                <Link className={classes.link} to='/signin'><ButtonOutlined onClick={handleClick} text='Logout'
                                                                            btnIcon={<LogoutOutlinedIcon/>}/></Link>
            </Toolbar>
        </AppBar>
    )
})
