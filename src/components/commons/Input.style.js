import styled from "styled-components";
import NumberFormat from 'react-number-format';

export const Input = styled.input`
  margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const InputNumber = styled(NumberFormat)`
margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

