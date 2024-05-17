import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button
        className={`h-10 px-6 rounded-md bg-${props.variant}-700 text-gray-100 font-medium`}
        type='submit'>
            {props.children}
        </button>
    </div>
  )
}

export default Button