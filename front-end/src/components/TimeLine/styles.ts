import styled from 'styled-components';
import { Slider as _Slider } from '@mui/material';
import { pxToRem } from '~/utils';

export const Container = styled.div`
  width: 80%;
  flex-direction: column;
`;

export const Slider = styled(_Slider)``;

export const ContainerInput = styled.div`
  justify-content: center;
`;

export const InputDate = styled.input``;

export const Text = styled.p`
  margin: 0 ${pxToRem(20)};
`;
