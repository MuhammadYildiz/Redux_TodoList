import React from 'react'
import TodoForm from "../components/TodoForm"
import { useList, changeDone, deleteItem, clearAll, } from '../redux/reducer'
export default function TodoList() {

    return (
        <div>
            <TodoForm />
            <div className='bg-cyan-900 min-h-[70vh] mt-5 shadow-xl shadow-black m-auto sm:rounded-3xl sm:w-[80%] flex flex-col'>
                {useList().map((listItem) => {
                    return (
                        <div key={listItem.id} className="flex flex-col justify-center items-center  m-3 lg:flex-row">
                            <div className={listItem.done ? "bg-red-700 line-through text-white w-[90%] p-2 my-3 text-center rounded-xl text-xl font-bold" : "bg-white w-[90%] p-2 my-3 text-center rounded-xl text-xl font-bold"}
                            >
                                {listItem.item}
                            </div>
                            <div className='lg: flex'>
                                <button
                                    className='bg-green-500 hover:bg-cyan-500 text-white w-[115px] p-2  outline-none font-bold rounded-xl mx-1'
                                    onClick={() => changeDone(listItem.id)}
                                >
                                    {listItem.done ? "Undo" : "Done"}
                                </button>
                                <button
                                    className='bg-yellow-600 hover:bg-red-500 text-white w-[115px] p-2  outline-none font-bold rounded-xl mx-1'
                                    onClick={() => deleteItem(listItem.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
                {useList().length > 1 && <button
                    className='bg-red-800 hover:bg-red-500 text-white w-[230px] p-2  outline-none font-bold rounded-xl mx-auto my-5 '
                    onClick={() => clearAll()}
                >
                    Clear All
                </button>}
            </div>
        </div>
    )
}
