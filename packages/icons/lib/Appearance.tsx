/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m32 5c-14.9117 0-27 12.0883-27 27s12.0883 27 27 27 27-12.0883 27-27-12.0883-27-27-27zm-23.02106 26.9999c0-12.7142 10.30686-23.02109 23.02106-23.02109v11.36859c6.4327.0034 11.6465 5.2192 11.6465 11.6527s-5.2138 11.6493-11.6465 11.6526v11.368h.0908l-.0908.0002c-12.7142 0-23.02106-10.3069-23.02106-23.021zm11.35276 0c0-6.4356 5.217-11.6526 11.6526-11.6526v23.3053c-6.4356 0-11.6526-5.2171-11.6526-11.6527z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m32 59c14.9117 0 27-12.0883 27-27s-12.0883-27-27-27-27 12.0883-27 27 12.0883 27 27 27zm23.0211-26.9999c0 12.7142-10.3069 23.0211-23.0211 23.0211v-11.3686c-6.4327-.0034-11.6465-5.2192-11.6465-11.6527s5.2138-11.6493 11.6465-11.6526v-11.36804h-.0908l.0908-.00018c12.7142 0 23.0211 10.30692 23.0211 23.02102zm-11.3528 0c0 6.4356-5.217 11.6526-11.6526 11.6526v-23.3053c6.4356 0 11.6526 5.2171 11.6526 11.6527z" fillRule="evenodd"/>,
    })
))