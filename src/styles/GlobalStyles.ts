import { createGlobalStyle } from "styled-components";

interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
  form{
    max-width:500px;
  }    
`;
