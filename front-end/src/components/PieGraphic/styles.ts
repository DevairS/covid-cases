import { Pie as _Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled(_Paper).attrs({ elevation: 2 })`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${pxToRem(300)};
  min-width: ${pxToRem(300)};
  padding: ${pxToRem(8)};
`;

export const Pie = styled(_Pie)``;
