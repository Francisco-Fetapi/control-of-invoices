import { createGlobalStyle } from "styled-components";

// TODO: do not use styled-components, use @emotion/styles instead. at the time you are using both, use only one of them.
interface StylesProps {
  mode: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    .page-container{
      width: 99%; 
      max-width: 500px;
    }
    .show_short_and_view_more{
    text-overflow:ellipsis;
    overflow: hidden;
    /* max-width:320px; */
    white-space: nowrap;
    display:inline-block;
  }
`;
