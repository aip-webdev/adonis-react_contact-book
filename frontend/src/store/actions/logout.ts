import {mergeDeepRight} from "ramda";
import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const logout = (set: SetState<IStateData>) => ({
    logout: () =>
        set((prev) =>
            mergeDeepRight(prev, {isAuth: false, authUserId: ''})
            )
});

export default logout;
