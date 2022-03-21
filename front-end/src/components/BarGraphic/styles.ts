import { Bar as _Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { device } from '~/theme';
import { pxToRem } from '~/utils';

export const Container = styled(_Paper).attrs({ elevation: 2 })`
  width: 100%;
  justify-content: center;
  border-radius: ${pxToRem(4)};
  background-color: #2d3748;
  margin: ${pxToRem(20)} ${pxToRem(0)};
  &.css-1mbunh-MuiPaper-root {
    background-color: #2d3748;
    border-radius: 0px;
  }
`;

export const Paper = styled.div`
  width: 50%;
  margin: ${pxToRem(20)} ${pxToRem(0)};

  @media ${device.phone} {
    width: 70%;
  }

  @media ${device.phone} {
    width: 100%;
    margin-top: ${pxToRem(0)};
  }
`;

export const Bar = styled(_Bar)``;
