import { createReduxModule } from 'hooks-for-redux'
export const [useList, { addNewItem, changeDone, deleteItem, clearAll }] = createReduxModule("list", [], {
    addNewItem: (state,value) => [
        ...state,
        {
            id: state.length,
            item: value,
            done: false,
        },
    ],
    changeDone: (state, id) =>
        state.map((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        }),
    deleteItem: (state, id) =>
        state.filter((index) => index.id !== id,
        ),
    clearAll: () => [],
});
