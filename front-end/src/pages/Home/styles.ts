import styled from 'styled-components';
import { Paper as _Paper, Skeleton as _Skeleton } from '@mui/material';
import { device } from '~/theme';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContainerMain = styled.div`
  width: 60%;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxToRem(20)};

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.phone} {
    width: 90%;
  }
`;

export const ContainerMap = styled(_Paper).attrs({ elevation: 2 })`
  width: 100%;
  justify-content: center;
  margin-top: ${pxToRem(20)};
  height: ${pxToRem(500)};

  &.css-1mbunh-MuiPaper-root {
    background-color: #2d3748;
  }

  @media ${device.laptop} {
    height: ${pxToRem(400)};
  }

  @media ${device.phone} {
    height: ${pxToRem(300)};
  }
`;

export const Skeleton = styled(_Skeleton)`
  width: 100%;
  height: 100%;
`;
