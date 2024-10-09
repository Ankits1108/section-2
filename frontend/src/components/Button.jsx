import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants'
import React from 'react'

export const MyButton = ({children}) => {
  return (
    <button className="p-3 rounded-md bg-violet-500 text-white hover:bg-violet-700">
        {children}
        </button>
  )
}
export  default MyButton;
