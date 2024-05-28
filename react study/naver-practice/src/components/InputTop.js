import React from "react";
import styled from "styled-components";

const InputTopLayout = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const LayoutCommon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
`;

const IdLayout = styled(LayoutCommon)`
  height: 33%;
`;

const PwLayout = styled(LayoutCommon)`
  height: 33%;
`;

const CheckedPwLayout = styled(LayoutCommon)`
  height: 33%;
  border-bottom: none;
  margin-bottom: 4px;
`;

const Idtype = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 50px;
  padding: 10px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

const InputTop = () => {
  return (
    <InputTopLayout>
      <IdLayout>
        <StyledInput type="text" placeholder="아이디"></StyledInput>
        <Idtype>@naver.com</Idtype>
      </IdLayout>
      <PwLayout>
        <StyledInput type="password" placeholder="비밀번호"></StyledInput>
      </PwLayout>
      <CheckedPwLayout>
        <StyledInput type="password" placeholder="비밀번호 확인"></StyledInput>
      </CheckedPwLayout>
    </InputTopLayout>
  );
};

export default InputTop;
