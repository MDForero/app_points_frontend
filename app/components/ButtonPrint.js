'use client'
import printJS from 'print-js-plus'
import React from 'react'

const ButtonPrint = ({data}) => {
    return (
    <button onClick={() => printJS({printable:'imprimir-div', type:'html' })}>
        Print
    </button>
  )
}

export default ButtonPrint