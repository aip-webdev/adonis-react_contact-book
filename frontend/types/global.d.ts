import {
    AddNewContactAction,
    AddNewContactDataAction,
    AddNewGroupAction,
    CreateNewUserAction,
    LoginAction,
    LogoutAction,
    RemoveContactAction,
    RemoveGroupAction,
    SetSearchValueAction
} from "../src/context/actions";

export interface IStateData {
    users: IUser [],
    contacts: IContacts [],
    isAuth: boolean,
    authUserId: string,
    searchField: string,
    loading: boolean,
    error: boolean,
    login: (id: string) => void,
    logout: () => void,
    createNewUser: (user: IUser) => void,
    addNewGroup: (id: string, groupName: string) => void,
    removeGroup: (id: string, groupName: string) => void,
    addNewContact: (id: string, contact: IContact) => void,
    removeContact: (id: string, contact: IContact) => void,
    addNewContactData: (contactData:IContacts) => void,
    setSearchValue: (searchValue: string) => void,
}

export interface IUser {
    id: string,
    email: string,
    password: string,
}

export interface IContact {
    id: string,
    name: string,
    lastName?: string,
    email?: string,
    tel?: string
    group: string
}

export interface IContacts {
    id: string,
    contactsList: IContact[]
    contactsGroups: string [],
}

export type MyAction =
    | LoginAction
    | LogoutAction
    | CreateNewUserAction
    | AddNewGroupAction
    | AddNewContactDataAction
    | AddNewContactAction
    | RemoveContactAction
    | SetSearchValueAction
    | RemoveGroupAction
