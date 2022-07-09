import styled from 'styled-components';

export const FilterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const FilterLabelTitle = styled.span`
font-size: ${props => props.theme.fontSizes.m};
`;

export const FilteInput = styled.input`
  margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;
