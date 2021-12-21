import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useEffect, useState, useCallback } from 'react';
// material-ui
import {
  Avatar,
  Box,
  Card,
  ButtonBase,
  Grid,
  InputAdornment,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Button,
  Switch,
  Typography,
  Breadcrumbs
} from '@mui/material';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import qs from 'qs';
import { useNavigate } from 'react-router';
import TextFormControl from './FormController/TextFormControl';

// ===============================|| UI COLOR ||=============================== //

const VaccineEnroll = () => {
  const [postVaccineValues, setPostVaccineValues] = useState({
    vaccineName: undefined,
    recommendVaccinationNumber: undefined,
    manufacturer: undefined
  });
  const navigate = useNavigate();

  async function enrollVaccine() {
    try {
      await axios({
        method: 'post',
        url: `${config.productionUrl}/api/vaccines`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: qs.stringify(postVaccineValues)
      });
      navigate('/dashboard/vaccine');
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = useCallback(
    (prop) => (event) => {
      setPostVaccineValues({ ...postVaccineValues, [prop]: event.target.value });
    },
    [postVaccineValues]
  );

  return (
    <MainCard sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px', height: '53px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            백신 등록
          </Typography>
        </Breadcrumbs>
      </Box>
      <TextFormControl label="백신" value={postVaccineValues.vaccineName} onChange={handleChange('vaccineName')} />
      <TextFormControl
        label="권장 접종 횟수"
        value={postVaccineValues.recommendVaccinationNumber}
        onChange={handleChange('recommendVaccinationNumber')}
      />
      <TextFormControl label="제조사" value={postVaccineValues.manufacturer} onChange={handleChange('manufacturer')} />

      <Box
        component="form"
        sx={{
          margin: '10px',
          width: '100%',
          textAlign: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <ButtonBase sx={{ borderRadius: '8px' }}>
          <Button variant="contained" size="small" onClick={() => enrollVaccine()}>
            등록
          </Button>
        </ButtonBase>
      </Box>
    </MainCard>
  );
};
export default VaccineEnroll;
