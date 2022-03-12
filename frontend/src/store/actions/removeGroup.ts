import {IContacts, IStateData} from "../../../types/global";
import {GetState, SetState} from "zustand";
import {indexOf, update, without} from "ramda";
import contactsDataById from "../selectors/contactsDataById";

const removeGroup = (set: SetState<IStateData>, get: GetState<IStateData>) => ({
    removeGroup: (id: string, groupName: string) => {
        const contactData = contactsDataById(id, get().contacts)
        const newContactsData: IContacts = {
            ...contactData,
            contactsGroups: without([groupName], contactData.contactsGroups)
        }
        return set(prev => ({
            contacts: update(indexOf(contactData, prev.contacts), newContactsData, prev.contacts)
        }))
    }
});

export default removeGroup;