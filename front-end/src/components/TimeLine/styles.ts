import styled from 'styled-components';
import { Slider as _Slider } from '@mui/material';
import { radius } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Container = styled.div`
  width: 80%;
  flex-direction: column;
  padding: ${pxToRem(40)} ${pxToRem(0)};
`;

export const Slider = styled(_Slider)``;

export const ContainerInput = styled.div`
  justify-content: center;
`;

export const InputDate = styled.input`
  padding: ${pxToRem(8)};
  border: 1px solid #c2c2c2;
  border-radius: ${mediumRadius};
  text-align: center;
  background-color: #fff;
`;

export const Text = styled.p`
  margin: 0 ${pxToRem(20)};
`;
