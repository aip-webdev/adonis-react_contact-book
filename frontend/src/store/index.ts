import create, {GetState, SetState} from 'zustand';

import login from './actions/login';
import logout from './actions/logout';
import createNewUser from './actions/createNewUser';
import addNewGroup from './actions/addNewGroup';
import removeGroup from './actions/removeGroup';
import addNewContact from './actions/addNewContact';
import removeContact from './actions/removeContact';
import addNewContactData from './actions/addNewContactData';
import setSearchValue from './actions/setSearchValue';

import {IStateData} from "../../types/global";
import {StoreApiWithSubscribeWithSelector} from "zustand/middleware";

const useStore = create<IStateData, SetState<IStateData>,
    GetState<IStateData>,
    StoreApiWithSubscribeWithSelector<IStateData>
    >((set: SetState<IStateData>, get: GetState<IStateData>) => ({
    users: [{
        id: "someId1",
        email: "some1@gmail.com",
        password: "somePass1"
    }],
    contacts: [
        {
            id: "someId1",
            contactsList: [
                {
                    id: "someContactID1",
                    name: "Name1",
                    lastName: "Lastname1",
                    email: "contact1@gmail.com",
                    tel: "+71111111111",
                    group: "all"
                },
                {
                    id: "someContactID2",
                    name: "Name2",
                    lastName: "Lastname2",
                    email: "contact2@gmail.com",
                    tel: "+72222222222",
                    group: "friends"
                },
                {
                    id: "someContactID3",
                    name: "Name3",
                    lastName: "Lastname3",
                    email: "contact3@gmail.com",
                    tel: "+73333333333",
                    group: "all"
                },
                {
                    id: "someContactID4",
                    name: "Name4",
                    lastName: "Lastname4",
                    email: "contact4@gmail.com",
                    tel: "+74444444444",
                    group: "friends"
                },
                {
                    id: "someContactID5",
                    name: "Name5",
                    lastName: "Lastname5",
                    email: "contact5@gmail.com",
                    tel: "+75555555555",
                    group: "all"
                },
                {

                    id: "someContactID6",
                    name: "Name6",
                    lastName: "Lastname6",
                    email: "contact6@gmail.com",
                    tel: "+76666666666",
                    group: "friends"
                },
                {
                    id: "someContactID7",
                    name: "Name7",
                    lastName: "Lastname7",
                    email: "contact7@gmail.com",
                    tel: "+77777777777",
                    group: "all"
                },
                {
                    id: "someContactID8",
                    name: "Name8",
                    lastName: "Lastname8",
                    email: "contact8@gmail.com",
                    tel: "+788888888888",
                    group: "friends"
                },
                {
                    id: "someContactID9",
                    name: "Name9",
                    lastName: "Lastname9",
                    email: "contact9@gmail.com",
                    tel: "+79999999999",
                    group: "all"
                }
            ],
            contactsGroups: [
                "all",
                "friends"
            ]
        }
    ],
    error: false,
    loading: false,
    isAuth: false,
    authUserId: '',
    searchField: '',
    ...login(set),
    ...logout(set),
    ...createNewUser(set),
    ...addNewGroup(set, get),
    ...removeGroup(set, get),
    ...addNewContact(set, get),
    ...removeContact(set, get),
    ...addNewContactData(set),
    ...setSearchValue(set),
}));

export default useStore;