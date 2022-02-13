import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F8F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16*0.9375 = 15px
      // Utilizamos percentual para respeitar a acessibilidade do usuário.
      // Utilizar pixels fixa o valor setado, % Não. Caso o usuário utilize uma config +/- a fonte, a % será relativa.
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16*0.0875 = 14px
    }
  }

  // REM = 1rem = 16px

  body {
    background: var(--backgroung);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  // Customizando tudo que estiver desabilitado na aplicação.
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;