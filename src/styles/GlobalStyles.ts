import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
    --white: #FFF;
    --grey: #9C98A6;
    --light-blue: #d2d4fe;
    --blue: #0D2856;
    --pink: #F85EFB;
    --dark-pink: #d11d53;
    --background-gradient: linear-gradient(89.8deg, #0D2856 14.4%, rgba(13, 18, 86, 0.19) 99.83%);
        /* --color-background: #F0F0F7;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        --color-primary: #8257E5;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        --color-secundary: #04D361;
        --color-secundary-dark: #04BF58;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #32264D;
        --color-text-complement: #9C98A6;
        --color-text-base: #6A6180;
        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-button-text: #FFFFFF;
        --color-box-base: #FFFFFF;
        --color-box-footer: #FAFAFC;
        --color-disabled-button: #DCDCE6;
        --color-input-smaller-text: #C1BCCC; */
    
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background-color: var(--white);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        font: 400 3.6rem Montserrat;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    @media (min-width: 1023px) {
        :root {
            font-size: 57.5%;
        }
    }

    @media (max-width: 768px) {
        :root {
            font-size: 48%;
        }
    }

    @media (max-width: 425px) {
        :root {
            font-size: 36%;
        }
    }

    @media (max-width: 320px) {
        :root {
            font-size: 32%;
        }
    }
`;
