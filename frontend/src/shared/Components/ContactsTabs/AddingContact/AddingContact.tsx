import React, {ChangeEvent, useState} from 'react';
import useStyles from './styles';
import {Button, Stack, TextField} from "@mui/material";
import {RemoveButton} from "../../RemoveButton";
import {AddingButton} from "../../AddingButton";
import {addStringId} from "../../../../utils/react/generateRandomIndex";
import {IContact} from "../../../../../types/global";
import {TransparentSelect} from "../../TransparentSelect";

interface IAddingContact {
    groupNames: string [],
    onClickAddingBtn: (contact: IContact) => void
}

export const AddingContact = React.memo(({groupNames, onClickAddingBtn}: IAddingContact) => {
        const [groupName, setGroupName] = useState('all')
        const [contactFields, setContactFields] = useState({name: '', lastName: '', email: '', tel: ''});
        const [isVisibleContactInputs, setIsVisibleContactInputs] = useState(false)
        const classes = useStyles()
        const handleInputChange = (e: ChangeEvent, key: string) => {
            // @ts-ignore
            let value = e.target?.value
            setContactFields({...contactFields, [key]: value})
        }

        const handleClickAddingButton = () => {
            onClickAddingBtn(addStringId({...contactFields, group: groupName}) as IContact)
            setIsVisibleContactInputs(false)
            setContactFields({name: '', lastName: '', email: '', tel: ''})
            setGroupName('all')
        }

        return (
            !isVisibleContactInputs ?
                <Button
                    className={classes.openInputFieldsButton}
                    onClick={() => setIsVisibleContactInputs(true)}
                >+
                </Button> :
                <Stack className={classes.stack}>

                    <>
                        <TransparentSelect labelName='Group name' list={groupNames} onChangeSelect={setGroupName}/>
                        {Object.keys(contactFields).map((key, index) => {
                            return (
                                <TextField
                                    key={index + key}
                                    aria-pressed={true}
                                    className={classes.tabInput}
                                    type='text'
                                    placeholder={`Add ${key}`}
                                    value={Object.values(contactFields)[index]}
                                    onBlur={() => setContactFields({
                                        ...contactFields,
                                        [key]: `${Object.values(contactFields)[index].trim()}`
                                    })}
                                    onClick={() => setContactFields({
                                        ...contactFields,
                                        [key]: ` ${Object.values(contactFields)[index].trim()}`
                                    })}
                                    onChange={(e) => handleInputChange(e, key)}
                                />
                            )
                        })}
                        <AddingButton classname={classes.addingBtn} onClickAddingBtn={handleClickAddingButton}/>
                        <RemoveButton classname={classes.removeBtn}
                                      onClickRemoveBtn={() => setIsVisibleContactInputs(false)}/>
                    </>
                </Stack>

        );
    }
)
