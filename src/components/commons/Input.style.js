import styled from "styled-components";
//import NumberFormat from 'react-number-format';
import InputMask from 'react-input-mask';

export const Input = styled.input`
  margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const InputNumber = styled(InputMask)`
margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

