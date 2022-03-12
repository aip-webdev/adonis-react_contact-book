import React from 'react';
import useStyles from './styles';
import {CancelPresentation} from "@mui/icons-material";
import {Button} from "@mui/material";

interface IRemoveButton {
  onClickRemoveBtn: () => void,
  classname?: any,
}

export const RemoveButton = React.memo(({onClickRemoveBtn, classname}: IRemoveButton) => {
  const classes = useStyles()
  return (
      <Button type='button' className={classname ?? classes.removeBtn} onClick={onClickRemoveBtn} startIcon={<CancelPresentation/>}/>
  )
})
