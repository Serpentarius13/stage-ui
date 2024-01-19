/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path d="M56.5024 35.0203C55.5898 33.0068 53.7646 31.9085 51.7568 31.9085C50.2966 31.9085 48.8364 32.4576 47.5587 33.739C45.0034 36.1186 43.1781 37.7661 42.448 38.1322C41.9004 38.4983 40.8053 38.3153 40.2577 37.5831C39.8926 37.0339 39.7101 36.3017 39.8927 35.2034C40.0752 34.4712 42.8131 17.0814 43.1781 14.5186C43.3606 13.2373 42.9956 11.9559 42.2655 11.0407C41.3529 10.1254 40.2577 9.57627 38.98 9.57627C37.1548 9.57627 34.9645 10.8576 34.4169 13.4203C34.2344 14.8847 33.0476 22.2068 32.5 25.6847C32.5 21.1085 32.9567 11.7729 32.9567 9.21017C32.9567 8.11186 32.5916 7.01356 31.8615 6.28136C30.9489 5.3661 29.8538 5 28.5761 5C26.3858 5 24.1955 6.46441 24.013 9.57627C24.013 12.6881 24.5 21.2915 24.5 25.1356C23.9524 22.0237 22.9178 14.5186 22.7353 13.2373C22.5528 11.0407 20.7275 9.57627 18.3547 9.57627C16.8945 9.39322 15.4343 9.94237 14.7042 11.0407C14.1566 11.5898 13.4265 12.8712 13.7915 14.8847C14.3391 18.3627 15.7699 26.2051 16.5 29.5C15.9524 28.4017 15.0692 23.8542 14.7042 22.7559C14.3391 20.7424 12.5139 19.461 10.5061 19.461C9.04589 19.461 7.76821 20.1932 6.85559 21.2915C5.94296 22.3898 5.76044 24.0373 6.30801 25.6847C7.76821 30.9932 9.59347 37.7661 11.9663 45.6373L12.1488 46.1864C14.5216 54.4237 20.3625 59 28.5761 59C34.0518 59 38.4324 56.2542 41.1703 53.8746C42.9956 52.4102 53.217 43.2576 55.5898 40.6949C57.05 39.0475 57.4151 36.8509 56.5024 35.0203Z"/>,
        outline: <path d="M56.5024 35.0203C55.5898 33.0068 53.7646 31.9085 51.7568 31.9085C50.2966 31.9085 48.8364 32.4576 47.5587 33.739C45.0034 36.1186 43.1781 37.7661 42.448 38.1322C41.9004 38.4983 40.8053 38.3153 40.2577 37.5831C39.8926 37.0339 39.7101 36.3017 39.8926 35.2034C40.0752 34.4712 42.8131 17.0814 43.1781 14.5186C43.3606 13.2373 42.9956 11.9559 42.2655 11.0407C41.3529 10.1254 40.2577 9.57627 38.98 9.57627C37.1548 9.57627 34.9645 10.8576 34.4169 13.4203C34.2344 14.8847 33.5043 19.461 32.9567 22.939C32.9567 18.3627 32.9567 11.7729 32.9567 9.21017C32.9567 8.11186 32.5916 7.01356 31.8615 6.28136C30.9489 5.3661 29.8538 5 28.5761 5C26.3858 5 24.1955 6.46441 24.013 9.57627C24.013 12.6881 24.013 17.2644 24.013 21.1085C23.4654 17.9966 22.9178 14.5186 22.7353 13.2373C22.5528 11.0407 20.7275 9.57627 18.3547 9.57627C16.8945 9.39322 15.4343 9.94237 14.7042 11.0407C14.1566 11.5898 13.4265 12.8712 13.7915 14.8847C14.3391 18.3627 15.0692 22.5729 15.7993 25.8678C15.2517 24.7695 15.0692 23.8542 14.7042 22.7559C14.3391 20.7424 12.5139 19.461 10.5061 19.461C9.04589 19.461 7.76821 20.1932 6.85559 21.2915C5.94296 22.3898 5.76044 24.0373 6.30801 25.6847C7.76821 30.9932 9.59347 37.7661 11.9663 45.6373L12.1488 46.1864C14.5216 54.4237 20.3625 59 28.5761 59C34.0518 59 38.4324 56.2542 41.1703 53.8746C42.9956 52.4102 53.217 43.2576 55.5898 40.6949C57.05 39.0475 57.4151 36.8509 56.5024 35.0203ZM53.582 38.8644C51.3917 41.2441 41.9004 49.6644 39.3451 51.861C37.3373 53.5085 33.3217 56.4373 28.5761 56.4373C21.4576 56.4373 16.7119 52.7763 14.8867 45.6373L14.7042 45.0881C12.3313 37.0339 10.5061 30.4441 9.04589 25.1356C8.86336 24.5864 8.86336 23.6712 9.22841 23.122C9.59346 22.7559 10.141 22.3898 10.6886 22.3898C11.0537 22.3898 11.9663 22.5729 12.3313 23.6712C12.8789 25.5017 13.244 26.9661 14.3391 30.078L15.0692 32.4576C15.4343 33.922 16.5294 34.6542 17.6246 34.6542C18.1721 34.6542 18.7197 34.4712 19.2673 33.922C19.8149 33.3729 19.9974 32.4576 19.8149 31.5424C19.8149 31.1763 19.4498 29.7119 19.0848 27.6983C18.3547 24.0373 17.442 18.7288 16.7119 14.3356C16.3469 13.6034 16.3469 13.0542 16.7119 12.6881C17.077 12.322 17.6246 12.139 18.1721 12.139C18.3547 12.139 19.6324 12.139 19.8149 13.4203C20.1799 15.8 21.4576 23.8542 22.0052 26.9661L22.1877 27.6983C22.5528 29.3458 23.6479 29.8949 24.378 29.8949C25.6557 29.8949 26.5683 28.9797 26.5683 27.6983V27.1492C26.5683 24.7695 26.5683 14.8847 26.5683 9.39322C26.5683 7.74576 27.846 7.56271 28.3936 7.56271C28.9411 7.56271 29.4887 7.74576 29.8538 8.11186C30.0363 8.29492 30.2188 8.66102 30.2188 9.02712C30.2188 12.6881 30.2188 23.8542 30.2188 26.9661C30.2188 28.9797 31.4965 29.8949 32.5916 29.8949C33.6868 29.8949 34.7819 28.9797 34.9645 27.8814C34.9645 27.6983 35.147 26.6 35.3295 25.1356C35.8771 21.6576 36.7897 15.6169 36.9722 13.7864C37.1548 12.322 38.4324 12.139 38.7975 12.139C39.3451 12.139 39.8927 12.322 40.0752 12.6881C40.4402 13.0542 40.4402 13.4203 40.4402 13.9695C40.0752 16.5322 37.3373 34.4712 37.3373 34.6542C36.9722 37.0339 37.7023 38.4983 38.4324 39.2305C39.8926 40.878 42.448 41.4271 44.2733 40.3288C45.0034 39.7797 46.4636 38.6814 49.749 35.5695C51.5743 33.922 53.582 34.2881 54.3121 35.9356C54.3121 36.4847 54.4947 37.7661 53.582 38.8644Z"/>,
    })
))