import {IContacts} from "../../../types/global";

const contactsDataById = (id: string, contacts: IContacts[]): IContacts =>
  contacts.find( contactData => contactData.id === id) as IContacts

export default contactsDataById