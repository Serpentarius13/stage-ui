/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M17.707 6.29301C17.316 5.90201 16.684 5.90201 16.293 6.29301L8 14.586V9.00001C8 8.44801 7.553 8.00001 7 8.00001C6.447 8.00001 6 8.44801 6 9.00001V17C6 17.552 6.447 18 7 18H15C15.553 18 16 17.552 16 17C16 16.448 15.553 16 15 16H9.414L17.707 7.70701C18.098 7.31601 18.098 6.68401 17.707 6.29301Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M17.707 6.29301C17.316 5.90201 16.684 5.90201 16.293 6.29301L8 14.586V9.00001C8 8.44801 7.553 8.00001 7 8.00001C6.447 8.00001 6 8.44801 6 9.00001V17C6 17.552 6.447 18 7 18H15C15.553 18 16 17.552 16 17C16 16.448 15.553 16 15 16H9.414L17.707 7.70701C18.098 7.31601 18.098 6.68401 17.707 6.29301Z"/>,
    })
))