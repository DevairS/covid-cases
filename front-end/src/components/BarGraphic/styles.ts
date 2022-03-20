import { Bar as _Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled(_Paper).attrs({ elevation: 2 })`
  width: 50%;
  margin: ${pxToRem(40)} ${pxToRem(0)};
`;

export const Bar = styled(_Bar)``;
