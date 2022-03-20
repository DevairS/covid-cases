import styled from 'styled-components';
import { Paper as _Paper } from '@mui/material';

export const Paper = styled(_Paper).attrs({ elevation: 2 })`
  display: flex;
  width: 100%;
  padding: 24px;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
