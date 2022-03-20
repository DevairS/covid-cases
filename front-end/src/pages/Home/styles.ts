import styled from 'styled-components';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContainerMain = styled.div`
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxToRem(20)};
`;

export const ContainerMap = styled.div`
  width: 50%;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
