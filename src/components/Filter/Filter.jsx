import { FilterLabelTitle} from './Filter.styled';
import {Input, Label} from 'components/commons';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <FilterLabelTitle>Find contacts by name:</FilterLabelTitle>
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
