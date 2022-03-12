import {IContacts, IStateData} from "../../../types/global";
import {GetState, SetState} from "zustand";
import {append, indexOf, uniq, update} from "ramda";
import contactsDataById from "../selectors/contactsDataById";

const addNewGroup = (set: SetState<IStateData>, get: GetState<IStateData>) => ({
    addNewGroup: (id: string, groupName: string) => {
        const contactData = contactsDataById(id, get().contacts)
        const newContactsData: IContacts = {
            ...contactData,
            contactsGroups: uniq(append(groupName, contactData.contactsGroups))
        }
        return set(prev => ({
            contacts: update(indexOf(contactData, prev.contacts), newContactsData, prev.contacts)
        }))
    }
});

export default addNewGroup;