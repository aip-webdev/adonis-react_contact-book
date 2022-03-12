import React from 'react';
import {Check} from "@mui/icons-material";
import useStyles from "./styles";
import {Button} from "@mui/material";

interface IAddingButton {
    onClickAddingBtn: () => void,
    classname?: any
}

export const AddingButton = React.memo(({onClickAddingBtn, classname}: IAddingButton) => {
    const classes = useStyles()
    return (
        <Button
            type='button'
            className={classname ?? classes.addingBtn}
            onClick={onClickAddingBtn}
        >
            <Check/>
        </Button>
    )
})
