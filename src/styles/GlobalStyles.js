import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before{
      box-sizing: border-box;
   }

   a{
      text-decoration: none;
   }

   body{
      margin: 0;
      font-size: 14px;
      font-family: 'Nunito Sans', sans-serif;
      background-color: ${({ theme }) => theme.bgColor};
   }

   img{
      width: 100%;
   }

`;

export default GlobalStyles;
