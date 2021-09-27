import styled from "styled-components";

// import backgroundImg from "../../public/backgroundImg.jpg";
import backgroundImg from "../assets/background-img.jpg";

export const Container = styled.div`
  padding: var(--padding-section);
  background-image: url(${backgroundImg});
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-width {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--max-width-app);
    position: relative;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    cursor: default;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    cursor: default;
  }

  p {
    text-indent: 3rem;
    cursor: default;
  }
`;
