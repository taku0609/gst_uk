tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: "#da373d",
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(0px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 1.5s ease-out'
            }
        },
    },
}