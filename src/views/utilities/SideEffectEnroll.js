/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useEffect, useState, useCallback } from 'react';
// material-ui
import { Avatar, Box, Card, Button, ButtonBase, Grid, InputAdornment, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
// material-ui
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import DateFormControl from './FormController/DateFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import { gridSpacing } from 'store/constant';
import moment from 'moment';
import { now } from 'lodash';
import { useNavigate } from 'react-router-dom';
import PaginationBar from './FormController/Pagination';
// ===============================|| UI COLOR ||=============================== //

const SideEffectEnroll = () => {
  const [postSideEffectValues, setpostSideEffectValues] = useState({
    vaccineId: undefined,
    name: undefined,
    symtomSite: undefined,
    durationHour: undefined,
    elpasedHour: undefined
  });
  let vaccine;
  async function handClickListner() {
    try {
      console.log(postSideEffectValues);
      const response = await axios({
        method: 'post',
        url: 'http://52.78.166.38:5100/api/side-effects',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: postSideEffectValues
      });
      alert('Success');
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleChange = useCallback(
    (prop) => (event) => {
      setpostSideEffectValues({ ...postSideEffectValues, [prop]: event.target.value });
    },
    [postSideEffectValues]
  );

  return (
    <MainCard title="부작용 신고">
      <Grid container spacing={gridSpacing}>
        <Grid container spacing={gridSpacing} justifyContent="center">
          <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
            <AsyncSelectFormControl
              sx={{ m: 1, margin: '10px', width: '500%' }}
              placeholder="백신명"
              required
              value={vaccine}
              getOptionLabel={(e) => e.vaccineName}
              getOptionValue={(e) => e.vaccineName}
              loadOptions={async (inputValue) => {
                try {
                  const res =
                    inputValue &&
                    (await axios({
                      method: 'get',
                      url: `http://52.78.166.38:5100/api/vaccines?vaccineName=${inputValue}`,
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                      }
                    }));
                  console.log(res.data[0][0]);
                  if (res.data[0].length > 0) {
                    vaccine = res.data[0][0].vaccineName;
                    return res.data[0];
                  }
                } catch (error) {
                  console.log(error.message);
                }
              }}
              onChange={(target) => {
                console.log(target);
                setpostSideEffectValues({
                  ...postSideEffectValues,
                  vaccineId: target.vaccineId
                });
              }}
            />
            {/* <TextField
                required
                id="outlined"
                label="백신명"
                value={postSideEffectValues.vaccineName}
                onChange={handleChange('vaccineName')}
                defaultValue=" "
                background="#ffffff"
              /> */}
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">백신명</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.vaccineName}
                                            onChange={handleChange('vaccineName')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl> */}
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
                label="부작용 증상"
                value={postSideEffectValues.name}
                onChange={handleChange('name')}
                defaultValue=" "
                background="#ffffff"
              />
              {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">부작용 증상</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={postSideEffectValues.name}
                                    onChange={handleChange('name')}
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
                label="증상 부위"
                value={postSideEffectValues.symtomSite}
                onChange={handleChange('symtomSite')}
                defaultValue=" "
                background="#ffffff"
              />
              {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">증상 부위</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={postSideEffectValues.symtomSite}
                                    onChange={handleChange('symtomSitet')}
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
                label="발현 후 지속시간"
                value={postSideEffectValues.durationHour}
                onChange={handleChange('durationHour')}
                defaultValue=" "
                background="#ffffff"
              />
              {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">발현 후 지속시간</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={postSideEffectValues.durationHour}
                                    onChange={handleChange('durationHour')}
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
                label="접종 후 경과시간"
                value={postSideEffectValues.elpasedHour}
                onChange={handleChange('elpasedHour')}
                defaultValue=" "
                background="#ffffff"
              />
              {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">접종 후 경과시간</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={postSideEffectValues.elpasedHour}
                                    onChange={handleChange('elpasedHour')}
                                    startAdornment={<InputAdornment position="start" />}
                                />
                            </FormControl> */}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={gridSpacing} justifyContent="center">
          <Grid item xs={6} sm={6} md={4} lg={2} container justifyContent="center">
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch', color: 'white', background: '#ffffff' },
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
      </Grid>
    </MainCard>
  );
};

export default SideEffectEnroll;
