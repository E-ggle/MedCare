import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>© 2022 Built and Design by @MedDevelopers</LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://twitter.com/">
          <img
            src="https://raw.githubusercontent.com/E-ggle/MedCare/5308103883844223de08e9a7c060b359e7b3dedf/src/assets/twitter-square-brands.svg"
            alt="Twitter"
          />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/">
          <img
            src="https://raw.githubusercontent.com/E-ggle/MedCare/5308103883844223de08e9a7c060b359e7b3dedf/src/assets/instagram-square-brands.svg"
            alt="Instagram"
          />
        </a>
        &nbsp;
        <a href="mailto:meddevelopers@gmail.com?subject=Email From Your Website">
          <img
            src="https://raw.githubusercontent.com/E-ggle/MedCare/5308103883844223de08e9a7c060b359e7b3dedf/src/assets/envelope-open-solid.svg"
            alt="Gmail"
          />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
