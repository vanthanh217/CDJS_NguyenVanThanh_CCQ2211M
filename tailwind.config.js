export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                main: ['Epilogue', 'sans-serif;'],
            },
            colors: {
                primary: '#FF8A6C',
                secondary: '#F93',
                bgDark: '#1b1b27',
                graySoft: '#B2B3BD',
                lightGray: '#9E9DA8',
                text2nd: '#808191',
                textPrimary: '#11142D',
                text2ndDark: '#6F767E',
                textDark: '#EFEFEF',
                lightStrock: '#E4E4E4',
                white: '#FCFCFC',
                textRed: '#F61A3D',
            },
            boxShadow: {
                box: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
            },
        },
    },
    plugins: [],
};
