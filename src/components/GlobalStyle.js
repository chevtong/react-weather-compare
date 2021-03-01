import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#022140" : "white"};
    color: ${(props) => (props.theme.mode === "dark" ? "#adadad" : "white")};
}

.input-city1, .city1-display, .btn-city1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#265077" : "#81B1CC"};
}

.input-city2, .city2-display, .btn-city2{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#494b68" : "#a9c6cf"};
}

.input-city3, .city3-display, .btn-city3{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2d5f5d" : "#cabbb9"};
}

.input-city4, .city4-display, .btn-city4{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#1e4258" : "#ffc7b9"};
}

.input-city1, .input-city2, .input-city3, .input-city4{
    color: ${(props) => (props.theme.mode === "dark" ? "#adadad" : "white")};
    border-bottom: ${(props) =>
      props.theme.mode === "dark" ? "1px solid #adadad" : "1px solid white"};
}

.btn-city1, .btn-city2, .btn-city3, .btn-city4{
    color: ${(props) => (props.theme.mode === "dark" ? "#adadad" : "white")};
    border: ${(props) =>
      props.theme.mode === "dark" ? "1px solid #adadad" : "1px solid white"};
}

.details{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#1e4258" : "#D9D3D2"};
}

`;

export default GlobalStyle;
