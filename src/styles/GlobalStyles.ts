import { createGlobalStyle } from "styled-components";

// TODO: do not use styled-components, use @emotion/styles instead. at the time you are using both, use only one of them.
interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    
`;
