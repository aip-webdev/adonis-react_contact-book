import {mergeDeepRight} from "ramda";
import {IStateData} from "../../../types/global";
import {SetState} from "zustand";

const setSearchValue = (set: SetState<IStateData>) => ({
    setSearchValue: (searchValue: string) =>
        set((prev) =>
            mergeDeepRight(prev, {searchField: searchValue})
        )
});

export default setSearchValue;