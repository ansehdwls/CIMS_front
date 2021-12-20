import { FormControl } from '@mui/material';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

function AsyncSelectFormControl(props) {
  const { sx, required, ...rest } = props;
  return (
    <FormControl required={required} sx={sx} variant="outlined">
      <AsyncSelect
        className="async-selector"
        isClearable
        cacheOptions
        defaultOptions
        autoload
        styles={{
          control: (provided) => ({
            ...provided,
            height: '60px'
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 99999
          })
        }}
        {...rest}
      />
    </FormControl>
  );
}

AsyncSelectFormControl.defaultProps = {
  sx: { m: 1, margin: '5px 2px', width: '100%' },
  required: false,
  isMulti: false
};

AsyncSelectFormControl.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  sx: PropTypes.object,
  styles: PropTypes.object,
  getOptionLabel: PropTypes.string,
  getOptionValue: PropTypes.string,
  loadOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  controlBorderColor: PropTypes.func
};

export default AsyncSelectFormControl;
