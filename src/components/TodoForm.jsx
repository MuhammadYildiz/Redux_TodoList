import React from 'react'
import { createReduxModule } from 'hooks-for-redux'
import {addNewItem,} from '../redux/reducer'
const [useValue, setValue] = createReduxModule("value", "")
const [inputAlert, setAlert] = createReduxModule("alert", "")

export default function TodoForm() {
    const value = useValue()
    return (
        <div className='flex flex-col justify-center items-center bg-cyan-600 m-auto sm:w-[80%] lg:sm:w-[50%] sm:mt-5 sm:rounded-3xl  shadow-xl shadow-black  pb-3 '>
            <h1 className='text-3xl my-5 sm:mt-10 text-center text-white'>Things I have to do today</h1>
            <div >{inputAlert()}</div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (!value) {
                    setAlert(
                        <p className='bg-white w-[230px] p-2 text-center text-red-500 font-bold rounded-xl '>
                            Please enter a todo
                        </p>
                    )
                }
                else {
                    setAlert("")
                    addNewItem({ newItem: value })
                    setValue("")
                }
            }}
                className="flex flex-col justify-center items-center sm:flex-row"
            >
                <input type="text"
                    className='bg-white w-[230px] p-2  outline-none font-bold rounded-xl my-3 '
                    placeholder='Ente to-do..'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setAlert("")
                    }
                    }
                    onFocus={() => setValue("")}
                />
                <div className='flex justify-around items-center m-auto'>
                    <button
                        className='bg-black hover:bg-blue-700 text-white w-[115px] p-2  outline-none font-bold rounded-xl mx-1 '
                    >
                        Add to do
                    </button>
                    {value &&
                        <button
                             className='bg-red-800 hover:bg-red-500 text-white w-[115px] p-2  outline-none font-bold rounded-xl  mx-1'
                            onClick={() => setValue("")}
                        >
                            Cleare Input
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}
