import { createReduxModule } from 'hooks-for-redux'
export const [useList, { addNewItem, changeDone, deleteItem,clearAll }] = createReduxModule("list", [], {
    addNewItem: (state, newDodoItem) => [
        ...state,
        {
            ...newDodoItem,
            id: state.length,
            item: newDodoItem.newItem,
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
    deleteItem: (state, id) => state.filter((index) => index.id !== id),
    clearAll: ()=> [],
});
