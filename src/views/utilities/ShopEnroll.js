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
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { gridSpacing } from 'store/constant';
import { IconSearch } from '@tabler/icons';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
// ===============================|| COLOR BOX ||=============================== //
const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

// ===============================|| UI COLOR ||=============================== //
const ShopEnroll = () => {
  const [postMallValues, setPostMallValues] = useState({
    storeName: undefined,
    storeAddress: undefined,
    storePhoneNumver: undefined
  });
  const [open, setOpen] = React.useState(0);
  const [currency, setCurrency] = React.useState('EUR');
  const [postMallName, setpostMallName] = useState({
    MallName: undefined
  });
  async function callMallValue() {
    try {
      console.log(process.env.REACT_APP_KAKAOAK);
      const response = await axios({
        method: 'get',
        url: `https://dapi.kakao.com/v2/local/search/keyword.JSON?query=${postMallName.MallName}`,
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOAK}`
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  const handleChange = (event) => {
    setCurrency(event.target.value);
    setOpen(open + 1);
    console.log(currency);
    console.log(open);
    return (
      <>
        {currencies.map((option) => (
          <Box key={option.value} value={option.value}>
            {option.label}
          </Box>
        ))}
      </>
    );
  };
  const handleChange1 = useCallback(
    (prop) => (event) => {
      setpostMallName({ ...postMallName, [prop]: event.target.value });
    },
    [postMallName]
  );
  async function handClickListner() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.17:5100/api/vaccines',
        data: {
          vaccineName: 'string',
          recommendVaccinationNumber: 0,
          manufacturer: 'string'
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainCard title="매장 등록">
      <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid container spacing={gridSpacing} justifyContent="center">
          <Grid item xs={6} sm={6} md={10} lg={2} container justifyContent="center">
            <Box
              sx={{
                margin: '10px',
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <TextField
                id="outlined-select-currency"
                label="outlined"
                value={currency}
                onChange={handleChange}
                helperText="매장 방문지를 입력해주세요"
              />
              {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">매장명</InputLabel>
                                <Input 
                                    id="standard-adornment-amount"
                                    value={postMallName.MallName}
                                    onChange={handleChange1('MallName')}
                                    startAdornment={<InputAdornment position="start" />}
                                />
                            </FormControl> */}
              {/* <ButtonBase>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        background: '#ffffff',
                                        color: '#bdbdbd'
                                    }}
                                    onClick={() => {
                                        callMallValue();
                                    }}
                                    color="inherit"
                                >
                                    <IconSearch stroke={1.0} size="1.3rem" />
                                </Avatar>
                            </ButtonBase> */}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ShopEnroll;
