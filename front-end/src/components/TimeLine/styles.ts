import styled from 'styled-components';
import { Slider as _Slider } from '@mui/material';
import { radius, device } from '~/theme';
import { pxToRem } from '~/utils';

const { mediumRadius } = radius;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  padding: ${pxToRem(20)} ${pxToRem(40)};
  background-color: #2d3748;
`;

export const Slider = styled(_Slider)``;

export const ContainerInput = styled.div`
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
  }

  @media ${device.phone} {
    flex-direction: column;
  }
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
  color: #fff;
`;
