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
  Typography
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

// ===============================|| UI COLOR ||=============================== //

const VaccineEnroll = () => {
  const [postVaccineValues, setpostVaccineValues] = useState({
    VaccineName: undefined,
    recommendVaccinationNumber: undefined,
    manufacturer: undefined
  });

  async function handClickListner() {
    try {
      console.log(localStorage.getItem('accessToken'));
      console.log(postVaccineValues);
      const response = await axios({
        method: 'post',
        url: `${config.productionUrl}/api/vaccines`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: postVaccineValues
      });
      alert('Success');
      console.log(postVaccineValues);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = useCallback(
    (prop) => (event) => {
      setpostVaccineValues({ ...postVaccineValues, [prop]: event.target.value });
    },
    [postVaccineValues]
  );

  return (
    <MainCard title="백신 등록">
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch', color: 'white', background: '#ffffff' },
              margin: '10px',
              width: '200%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined"
              label="백신명"
              value={postVaccineValues.vaccineName}
              onChange={handleChange('vaccineName')}
              defaultValue=" "
              background="#ffffff"
            />
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">백신명</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postVaccineValues.vaccineName}
                                            onChange={handleChange('vaccineName')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch', color: 'white', background: '#ffffff' },
              margin: '10px',
              width: '200%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined"
              label="권장 접종 횟수"
              value={postVaccineValues.recommendVaccinationNumber}
              onChange={handleChange('recommendVaccinationNumber')}
              startAdornment={<InputAdornment position="start" />}
              defaultValue=" "
              background="#ffffff"
            />
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">권장 접종 횟수</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postVaccineValues.recommendVaccinationNumber}
                                            onChange={handleChange('recommendVaccinationNumber')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch', color: 'white', background: '#ffffff' },
              margin: '10px',
              width: '200%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined"
              label="제조사"
              value={postVaccineValues.manufacturer}
              onChange={handleChange('manufacturer')}
              defaultValue=" "
              background="#ffffff"
            />
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">제조사</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postVaccineValues.manufacturer}
                                            onChange={handleChange('manufacturer')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              margin: '10px',
              width: '30%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <ButtonBase sx={{ borderRadius: '8px' }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  handClickListner();
                }}
              >
                Submit
              </Button>
            </ButtonBase>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default VaccineEnroll;
