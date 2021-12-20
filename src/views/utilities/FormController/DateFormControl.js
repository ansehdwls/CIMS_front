import { LocalizationProvider } from '@mui/lab';
import { FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MomentAdapter from '@date-io/moment';

function DateFormControl(props) {
  const { sx, required, ...rest } = props;

  return (
    <FormControl required={required} sx={sx} variant="outlined">
      <LocalizationProvider dateAdapter={MomentAdapter}>
        <DateTimePicker inputFormat="YYYY-MM-DD hh:mm a" renderInput={(renderProps) => <TextField {...renderProps} />} {...rest} />
      </LocalizationProvider>
    </FormControl>
  );
}

DateFormControl.defaultProps = {
  sx: { m: 1, margin: '5px 2px' },
  required: false
};

DateFormControl.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  sx: PropTypes.object
};

export default DateFormControl;
