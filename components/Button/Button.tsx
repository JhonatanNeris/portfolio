import React from 'react'

type Props = {
    name?: string;
    onClick?: () => void;
}

const Button = ({name, onClick}: Props) => {
    return (
        <button className='bg-white cursor-pointer text-black px-4 py-1 rounded-xl hover:bg-gray-200 transition-colors font-[500]' onClick={onClick}>
            {name}
        </button>
    )
}

export default Button