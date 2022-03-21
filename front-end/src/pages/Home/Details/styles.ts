import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { device } from '~/theme';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-top: ${pxToRem(20)};

  @media ${device.phone} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Paper = styled(_Paper).attrs({ elevation: 2 })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${pxToRem(300)};
  min-width: ${pxToRem(300)};
  &.css-1mbunh-MuiPaper-root {
    background-color: #2d3748;
  }
  @media ${device.laptop} {
    max-width: ${pxToRem(250)};
    min-width: ${pxToRem(250)};
  }

  @media ${device.phone} {
    max-width: 100%;
    min-width: 100%;
    margin-bottom: ${pxToRem(20)};
    min-height: ${pxToRem(200)};
  }
`;

export const TextTitle = styled.p`
  color: #fff;
  font-size: ${pxToRem(20)};
  margin-bottom: ${pxToRem(8)};
  @media ${device.laptop} {
    font-size: ${pxToRem(16)};
  }
`;

export const Text = styled.p`
  color: #fff;
  margin: ${pxToRem(0)};
`;
