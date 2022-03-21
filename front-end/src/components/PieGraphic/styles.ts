import { Pie as _Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { device } from '~/theme';
import { pxToRem } from '~/utils';

export const Container = styled(_Paper).attrs({ elevation: 2 })`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${pxToRem(300)};
  min-width: ${pxToRem(300)};
  padding: ${pxToRem(8)};
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
  }
`;

export const Pie = styled(_Pie)``;

export const Text = styled.p`
  color: #fff;
  margin: ${pxToRem(0)};
`;
