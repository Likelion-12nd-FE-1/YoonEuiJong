import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const InputBottomLayout = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 10px;
  box-sizing: border-box; /* 전체 크기에 테두리와 패딩을 포함 */
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LayoutCommon = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
`;

const NameLayout = styled(LayoutCommon)`
  margin-top: 10px;
`;

const BirthLayout = styled(LayoutCommon)``;

const ButtonLayout = styled(LayoutCommon)`
  overflow: hidden;
`;

const CountryOptionLayout = styled(LayoutCommon)`
  justify-content: center;
`;

const PhoneNumberLayout = styled(LayoutCommon)`
  height: 20%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 3px;
  color: gray;
  cursor: pointer;
`;

const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  appearance: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
`;

const ArrowIcon = styled(FaChevronDown)`
  margin-left: 10px;
`;

const InputBottom = () => {
  return (
    <InputBottomLayout>
      <NameLayout>
        <StyledInput type="text" placeholder="이름"></StyledInput>
      </NameLayout>
      <BirthLayout>
        <StyledInput type="text" placeholder="생년월일 8자리"></StyledInput>
      </BirthLayout>
      <ButtonLayout>
        <StyledButton>남자</StyledButton>
        <StyledButton>여자</StyledButton>
        <StyledButton>선택안함</StyledButton>
      </ButtonLayout>
      <CountryOptionLayout>
        <Select>
          <option value="kr">대한민국 82</option>
          <option value="us">미국 +1</option>
          <option value="jp">일본 +81</option>
        </Select>
        <ArrowIcon />
      </CountryOptionLayout>
      <PhoneNumberLayout>
        <StyledInput type="text" placeholder="휴대전화번호"></StyledInput>
      </PhoneNumberLayout>
    </InputBottomLayout>
  );
};

export default InputBottom;
