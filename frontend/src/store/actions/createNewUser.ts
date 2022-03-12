import {IStateData, IUser} from "../../../types/global";
import {SetState} from "zustand";
import {append} from "ramda";

const createNewUser = (set: SetState<IStateData>) => ({
    createNewUser: (user: IUser) =>
        set((prev) => ({
                users: append(user, prev.users)
            })
        )
});

export default createNewUser;