import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';

function TextFormControl(props) {
  const { sx, label, required, value, regex, ...rest } = props;
  return (
    <FormControl sx={sx} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        error={(required && !value) || (value && regex && !new RegExp(regex).test(value))}
        value={value}
        label={label}
        {...rest}
      />
    </FormControl>
  );
}

TextFormControl.defaultProps = {
  sx: { m: 1, margin: '5px 2px', width: '100%' },
  required: false,
  multiline: false
};

TextFormControl.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool,
  regex: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  sx: PropTypes.object
};

export default TextFormControl;
