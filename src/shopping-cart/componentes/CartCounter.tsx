'use client'
import { useState } from 'react'

interface ICartCounter {
    value?: number;
}

export const CartCounter = ({ value = 0 }: ICartCounter) => {
    const [buttonCounter, setButtonCounter] = useState(value);

    return (
        <>
            <span className="text-9xl">{buttonCounter}</span>
            <div className="flex">
                <button
                    onClick={() => setButtonCounter(buttonCounter + 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-pink-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={() => setButtonCounter(buttonCounter - 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-pink-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
