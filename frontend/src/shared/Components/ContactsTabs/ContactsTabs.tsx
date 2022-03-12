import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {TabPanel} from "./TabPanel";
import {IContact, IContacts} from "../../../../types/global";
import {Contact} from "../Contact";
import {Box, Tab, Tabs} from "@mui/material";
import {AddingTab} from "./AddingTab";
import {Loading} from "../Loading";
import {AddingContact} from "./AddingContact";
import {useMediaSize} from "../../../hooks/useMediaSize";
import {Close} from '@mui/icons-material';
import useStore from "../../../store";
import {find, propEq} from "ramda";
import shallow from "zustand/shallow";

export const a11yProps = (isSm: boolean, index: number) => (isSm ?
    {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    } :
    {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    });

export const ContactsTabs = React.memo(() => {
    const [value, setValue] = useState(0)
    const [search] = useState('')
    const [data, setData] = useState<IContacts>()
    const {isSm} = useMediaSize();
    const classes = useStyles()
    const authUserId = useStore(state => state.authUserId, shallow)
    const contacts = useStore(state => state.contacts, shallow)
    const searchField = useStore(state => state.searchField, shallow)
    const addNewContact = useStore(state => state.addNewContact)
    const removeContact = useStore(state => state.removeContact)
    const removeGroup = useStore(state => state.removeGroup)


    useEffect(() => {
        if (!contacts || !contacts || contacts.length === 0) return;
        let contactData = find(propEq('id', authUserId))(contacts) as IContacts
        !!contactData && setData(contactData)
    }, [contacts])
    useEffect(() => {
        if (!!searchField && !!data) {
            let contactData = {
                ...data, contactsList: data.contactsList.filter((contact: IContact) =>
                    !searchField ? true : !!Object.values(contact)
                        .find((value: string) => value.includes(searchField))
                )
            }
            !!data && setData(contactData)
        }
    }, [searchField])

    if (!data) return (<Loading/>);
    const {id, contactsList, contactsGroups} = data

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickAddingContactBtn = (contact: IContact) => {
        addNewContact(id, contact)
    }

    const handleClickRemoveContactBtn = (contact: IContact) => {
        removeContact(id, contact)
    }

    // @ts-ignore
    const handleClickRemoveTabBtn = (groupName: string, e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation()
        removeGroup(id, groupName)
    }

    return (
        <Box className={classes.box}>
            <Tabs
                orientation={isSm ? 'horizontal' : 'vertical'}
                variant='scrollable'
                value={value}
                onChange={handleChange}
                aria-label='Groups'
                className={classes.tabs}
            >
                {contactsGroups.map((groupName, index) =>
                    <Tab
                        className={classes.tab}
                        key={index}
                        label={groupName === 'all' ? groupName :
                            <>
                                {groupName}
                                <Close
                                    onClick={(e) => handleClickRemoveTabBtn(groupName, e)}
                                    className={classes.closeTabButton}
                                />
                            </>
                        }
                        {...a11yProps(isSm, index)}
                    />
                )}
                <AddingTab contact={data} />
            </Tabs>

            {contactsGroups.map(((groupName, index) =>
                    <TabPanel key={index} value={value} index={index}>
                        <AddingContact groupNames={contactsGroups} onClickAddingBtn={handleClickAddingContactBtn}/>
                        {groupName === 'all' && !search && contactsList.length > 0 && contactsList
                            .map((contact: IContact) =>
                                <Contact key={contact.id} contact={contact}
                                         onClickRemoveBtn={handleClickRemoveContactBtn}/>
                            )}

                        {groupName !== 'all' && contactsList.length > 0 && contactsList
                            .filter((contact: IContact) => contact.group === groupName)
                            .map((contact: IContact) =>
                                <Contact key={contact.id} contact={contact}
                                         onClickRemoveBtn={handleClickRemoveContactBtn}/>
                            )}
                    </TabPanel>
            ))}
        </Box>
    );
})
