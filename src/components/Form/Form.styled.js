import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactFormForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const ContactFormInput = styled(Field)`
  margin-top: 5px;
  padding: 3px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const ErrorText = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  color: red;
`;