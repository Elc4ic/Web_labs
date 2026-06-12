import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListsState {
    lists: string[][];
    results: string[] | null;
}

const initialState: ListsState = {
    lists: [],
    results: null
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
            const { index, items } = action.payload;
            state.lists[index] = items;
        },
        setDraggedItems: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
            const { index, items } = action.payload;
            if (index >= 0 && index < state.lists.length) {
                state.lists[index] = items;
            }
        },
        setResults: (state, action: PayloadAction<string[] | null>) => {
            state.results = action.payload;
        }
    },
});

export const { addList, setDraggedItems, setResults } = listsSlice.actions;
export default listsSlice.reducer;