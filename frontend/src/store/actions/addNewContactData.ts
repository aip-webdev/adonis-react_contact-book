import {IContacts, IStateData} from "../../../types/global";
import {SetState} from "zustand";
import {append} from "ramda";

const addNewContactData = (set: SetState<IStateData>) => ({
    addNewContactData: (contactData: IContacts) => {
        return set((prev) => ({
                contacts: append(contactData, prev.contacts)
            })
        )
    }
});

export default addNewContactData;