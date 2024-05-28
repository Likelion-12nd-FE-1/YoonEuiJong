import React from "react";
import styled from "styled-components";

const AcceptLayout = styled.div`
  width: 100%;
  height: 5%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 600;

  border-radius: 8px;

  background-color: #1ec800;
`;

const Accept = () => {
  return <AcceptLayout>인증 요청</AcceptLayout>;
};

export default Accept;
