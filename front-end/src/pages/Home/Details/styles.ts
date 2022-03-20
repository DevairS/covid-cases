import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled.div``;

export const Paper = styled(_Paper).attrs({ elevation: 2 })`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${pxToRem(20)};
`;
