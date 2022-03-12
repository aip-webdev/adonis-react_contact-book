import React, {useState} from 'react';
import useStyles from './styles';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface ISelectProps {
  labelName: string,
  list: string [],
  onChangeSelect: (item: string) => void
}

export const TransparentSelect = React.memo(({labelName, list, onChangeSelect}: ISelectProps) => {
    const classes = useStyles()
    const [value, setValue] = useState(list[0])
    const handleChange = (e: SelectChangeEvent<string>) => {
        // @ts-ignore
        const value = e.target.value
        setValue(value)
        onChangeSelect(value)
    }
    return (
        <FormControl className={classes.formControl} variant="standard">
            <InputLabel id="demo-simple-select-standard-label">Group name</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={value}
                onChange={(e: SelectChangeEvent) => handleChange(e)}
                label={labelName}
            >
                {list.map((item, index) => {
                    return (<MenuItem key={index} value={item}>{item.toUpperCase()}</MenuItem>)
                })}

            </Select>
        </FormControl>
    )
})
