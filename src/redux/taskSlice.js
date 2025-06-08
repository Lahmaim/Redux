import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        filter: "all", // 'all', 'done', 'not'
    },
    reducers: {
        addTask: (state, action) => {
            state.list.push({
                id: nanoid(),
                description: action.payload,
                isDone: false,
            });
        },
        toggleTask: (state, action) => {
            const task = state.list.find((t) => t.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        editTask: (state, action) => {
            const { id, newDesc } = action.payload;
            const task = state.list.find((t) => t.id === id);
            if (task) task.description = newDesc;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
