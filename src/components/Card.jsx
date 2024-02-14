import React from 'react'

export default function Card() {
    return (
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
        <div className="px-5 pb-5" >
            <a href="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Changing background from dark mode to light mode and vice-versa.
                </h5>
            </a>
        </div>
    </div>
    );
}

