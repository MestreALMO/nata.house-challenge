import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 70%;
    border: 2px solid #333;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    margin: 0.8rem 0;
    -moz-appearance: textfield;
  }

  svg {
    position: absolute;
    color: #333;
    font-size: 1.5rem;
    top: 1.5rem;
    left: 16.5%;
  }
`;
