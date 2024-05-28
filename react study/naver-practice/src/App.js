import React from "react";
import NaverLogo from "./components/NaverLogo";
import styled from "styled-components";
import InputTop from "./components/InputTop";
import InputBottom from "./components/InputBottom";
import Accept from "./components/Accept";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: red; */
`;
const LoginLayout = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* background-color: aqua; */
`;
const ConfirmPassword = styled.div`
  color: red;
  font-size: 12px;
`;
function App() {
  return (
    <Container>
      <LoginLayout>
        <NaverLogo></NaverLogo>
        <InputTop></InputTop>
        <ConfirmPassword>비밀번호가 일치하지 않습니다.</ConfirmPassword>
        <InputBottom></InputBottom>
        <Accept></Accept>
      </LoginLayout>
    </Container>
  );
}

export default App;
