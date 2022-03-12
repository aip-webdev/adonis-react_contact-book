import React, {ChangeEvent} from 'react';
import useStyles from "./styles";
import {FormControl, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface ISearchField {
  searchTextVal: string
  handler: (e: ChangeEvent) => void
}

export const SearchField = React.memo((props: ISearchField) => {
    const {handler, searchTextVal} = props
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl} variant="outlined">
            <TextField
                className={classes.textField}
                id="search"
                label="Search"
                color='info'
                type="text"
                value={searchTextVal}
                onChange={handler}
            />

            <SearchIcon className={classes.searchIcon}/>
        </FormControl>
    )
})
