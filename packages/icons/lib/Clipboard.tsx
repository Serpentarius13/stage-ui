/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M8 8H16C16.552 8 17 7.553 17 7V3C17 2.447 16.552 2 16 2H8C7.448 2 7 2.447 7 3V7C7 7.553 7.448 8 8 8ZM18 7V4C19.654 4 21 5.346 21 7V19C21 20.654 19.654 22 18 22H6C4.346 22 3 20.654 3 19V7C3 5.346 4.346 4 6 4V7C6 8.103 6.897 9 8 9H16C17.103 9 18 8.103 18 7Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7V8C6 9.103 6.897 10 8 10H16C17.103 10 18 9.103 18 8V7C18.551 7 19 7.448 19 8V19ZM8 4L16 4.003V5V8H8V5V4ZM18 5V4C18 2.897 17.103 2 16 2H8C6.897 2 6 2.897 6 4V5C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"/>,
    })
))