import { FilterLabelTitle, FilterFormLabel, FilteInput} from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterFormLabel>
      <FilterLabelTitle>Find contacts by name:</FilterLabelTitle>
      <FilteInput type="text" value={value} onChange={onChange} />
    </FilterFormLabel>
  );
};
