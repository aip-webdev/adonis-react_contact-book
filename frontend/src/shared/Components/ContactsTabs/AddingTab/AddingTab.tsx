import React, {ChangeEvent, useRef} from 'react';
import useStyles from './styles';
import {Tab, TextField} from "@mui/material";
import {useMouseEventAction} from "../../../../hooks/useMouseEventAction";
import {a11yProps} from "../ContactsTabs";
import {IContacts} from "../../../../../types/global";
import {AddingButton} from "../../AddingButton";
import {useMediaSize} from "../../../../hooks/useMediaSize";
import useStore from "../../../../store";

interface IAddingTab {
    contact: IContacts
}

export const AddingTab = React.memo((props: IAddingTab) => {
    const ref = useRef(null)
    const classes = useStyles()
    const [newGroupVal, setNewGroupVal] = React.useState('')
    const {id, contactsGroups} = props.contact
    const {isSm, isMd} = useMediaSize()
    useMouseEventAction({action: () => setNewGroupVal(''), ref})
    const addNewGroup = useStore(state => state.addNewGroup)
    const handleTabInputChange = (e: ChangeEvent) => {
        // @ts-ignore
        let value = e.target?.value
        setNewGroupVal(value)
    }

    const handleClickAddingBtn = () => {
        addNewGroup(id, newGroupVal.trim().toLowerCase())
        setNewGroupVal('')
    }

    const handleClickOnInput = () => {
        setNewGroupVal(` ${newGroupVal.trim()}`)
    }

    const handleKeyPressAddingBtn = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            addNewGroup(id, newGroupVal.trim().toLowerCase())
            setNewGroupVal('')
            // @ts-ignore
            e.target.blur()
        }
    }

    return (
        <Tab
            className={classes.addingTab}
            label={
                <>
                    <TextField
                        ref={ref}
                        aria-pressed={true}
                        className={classes.tabInput}
                        type='text'
                        placeholder='Add group'
                        value={newGroupVal}
                        onClick={handleClickOnInput}
                        onKeyPress={(e) => handleKeyPressAddingBtn(e)}
                        onChange={(e) => handleTabInputChange(e)}


                    />
                    {newGroupVal && <AddingButton onClickAddingBtn={handleClickAddingBtn}/>}
                </>
            }
            {...a11yProps(isSm || isMd, contactsGroups.length)}
        />
    );
})
