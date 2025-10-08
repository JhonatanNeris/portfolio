import React from 'react'

type Props = {
    name?: string;
    onClick?: () => void;
}

const Button = ({name, onClick}: Props) => {
    return (
        <button className='bg-gradient-to-r from-blue-500 to-blue-800 text-white cursor-pointer px-6 py-3 rounded-xl hover:to-blue-500 transition-colors font-[500]' onClick={onClick}>
            {name}
        </button>
    )
}

export default Button