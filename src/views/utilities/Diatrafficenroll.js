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
import DatePicker from '@mui/lab/DatePicker';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// project imports
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import diatraffic from './diatraffic';
// ===============================|| UI COLOR ||=============================== //

const Diatrafficenroll = () => {
  const [postDiaMallValues, setPostDiaMallValues] = useState({
    coronicId: undefined,
    placeId: undefined,
    visitedAt: undefined
  });
  const [value, setValue] = React.useState(new Date());
  async function handClickListner() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.17:5100/api/coronic',
        data: postDiaMallValues
      });
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = useCallback(
    (prop) => (event) => {
      setPostDiaMallValues({ ...postDiaMallValues, [prop]: event.target.value });
    },
    [postDiaMallValues]
  );

  return (
    <MainCard title="확진자 방문 등록">
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
            <TextField required id="outlined" label="확진번호" defaultValue=" " background="#ffffff">
              <Input
                id="standard-adornment-amount"
                value={postDiaMallValues.coronicId}
                onChange={handleChange('coronicId')}
                startAdornment={<InputAdornment position="start" />}
              />
            </TextField>
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">확진 번호</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={postDiaMallValues.coronicId}
                                onChange={handleChange('coronicId')}
                                startAdornment={<InputAdornment position="start" />}
                            />
                        </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
              margin: '10px',
              width: '200%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required id="outlined-required" label="매장명" defaultValue=" " />
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">매장명</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={postDiaMallValues.placeId}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start" />}
                            />
                        </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '35ch' },
              margin: '10px',
              width: '200%',
              background: '#ffffff'
            }}
            noValidate
            autoComplete="off"
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="For desktop"
                  value={value}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">방문 날짜</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={postDiaMallValues.visitedAt}
                                onChange={handleChange('visitedAt')}
                                startAdornment={<InputAdornment position="start" valid />}
                            />
                        </FormControl> */}
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Divider />
        <Grid item xs={6} sm={6} md={4} lg={2} container justifyContent="center">
          <Box
            sx={{
              margin: '10px',
              width: '30%',
              background: '#ffffff'
            }}
          >
            <ButtonBase sx={{ borderRadius: '8px' }}>
              <Button variant="contained" size="small" onClick={() => handClickListner}>
                Submit
              </Button>
            </ButtonBase>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default Diatrafficenroll;
