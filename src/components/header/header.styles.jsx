import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const dark = "#20232a";
const blueLight = "#61dafb";

const transitionStyle = css`
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  max-height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${dark};
  z-index: 1;
  padding: 10px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${blueLight};

  @media screen and (max-width: 800px) {
    width: 28px;
    padding: 0;
  }
`;

export const UserContainer = styled.div`
  width: 40%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: auto;
    padding: 0;
  }
`;

export const MenusContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  margin: 0 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: auto;
    margin: 0 10px;
  }
`;

export const MenusLink = styled(Link)`
  ${transitionStyle}
  padding: 10px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #61dafb;
  }

  @media screen and (max-width: 800px) {
    width: auto;
    padding: 5px 10px;
  }
`;

export const ButtonOptions = styled.button`
  ${transitionStyle}
  border: 1px solid #61dafb;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  background: transparent;
  &:hover {
    color: #61dafb;
  }
`;
