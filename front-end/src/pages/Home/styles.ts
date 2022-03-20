import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ContainerMain = styled.div`
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxToRem(20)};
`;

export const ContainerMap = styled(_Paper).attrs({ elevation: 2 })`
  width: 60%;
  justify-content: center;
  margin: ${pxToRem(20)} ${pxToRem(0)};
  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
