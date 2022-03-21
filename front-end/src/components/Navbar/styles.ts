import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { device } from '~/theme';
import { pxToRem } from '~/utils';

export const Paper = styled(_Paper).attrs({ elevation: 2, color: '#2d3748' })`
  display: flex;
  width: 100%;
  padding: ${pxToRem(24)} ${pxToRem(64)};
  &.css-1mbunh-MuiPaper-root {
    background-color: #2d3748;
    border-radius: 0px;
  }
  @media ${device.phone} {
    padding: ${pxToRem(24)} ${pxToRem(0)};
    justify-content: center;
  }
`;

export const Text = styled.h3`
  font-family: 'Teko', sans-serif;
  font-size: ${pxToRem(32)};
  color: #fff;
  margin: 0;

  @media ${device.phone} {
    font-size: ${pxToRem(16)};
  }
`;
