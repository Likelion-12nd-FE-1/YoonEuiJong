import React from "react";
import styled from "styled-components";

const LogoLayout = styled.div`
  width: 100%;
  height: 15%;

  /* background-color: black; */
`;
const Logo = styled.div`
  color: #1ec800;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Setence = styled.div`
  width: 100%;
  height: 20%;
  display: flex;

  font-size: 15px;
  color: #ccc;

  align-items: flex-end;
  justify-content: end;

  /* background-color: blue; */
`;

const NaverLogo = () => {
  return (
    <LogoLayout>
      <Logo>NAVER</Logo>
      <Setence>
        실명 인증된 아이디로 가입 <button></button>
      </Setence>
    </LogoLayout>
  );
};

export default NaverLogo;
