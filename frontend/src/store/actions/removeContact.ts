import {IContact, IContacts, IStateData} from "../../../types/global";
import {GetState, SetState} from "zustand";
import {indexOf, update, without} from "ramda";
import contactsDataById from "../selectors/contactsDataById";

const removeContact = (set: SetState<IStateData>, get: GetState<IStateData>) => ({
    removeContact: (id: string, contact: IContact) => {
        const contactData = contactsDataById(id, get().contacts)
        const newContactsData: IContacts = {
            ...contactData,
            contactsList: without([contact], contactData.contactsList)
        }
        return set(prev => ({
            contacts: update(indexOf(contactData, prev.contacts), newContactsData, prev.contacts)
        }))
    }
});

export default removeContact;