import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-top: ${pxToRem(20)};
`;

export const Paper = styled(_Paper).attrs({ elevation: 2 })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(20)};
  max-width: ${pxToRem(250)};
  min-width: ${pxToRem(250)};
`;
