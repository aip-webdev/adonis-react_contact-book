import {mergeDeepRight} from "ramda";
import {IStateData} from "../../../types/global";
import {SetState} from "zustand";


const login = (set: SetState<IStateData>) => ({
    login: (id: string) =>
        set((prev) =>
            mergeDeepRight(prev, {isAuth: true, authUserId: id})
        )
});

export default login;