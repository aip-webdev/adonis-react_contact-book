import {IContact, IContacts, IStateData} from "../../../types/global";
import {GetState, SetState} from "zustand";
import {append, indexOf, update} from "ramda";
import contactsDataById from "../selectors/contactsDataById";

const addNewContact = (set: SetState<IStateData>, get: GetState<IStateData>) => ({
    addNewContact: (id: string, contact: IContact) => {
        const contactData = contactsDataById(id, get().contacts)
        const newContactsData: IContacts = <IContacts>{
            ...contactData,
            contactsList: append(contact, contactData.contactsList)
        }
        return set(prev => ({
            contacts: update(indexOf(contactData, prev.contacts), newContactsData, prev.contacts)
        }))
    }
});

export default addNewContact;