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
// project imports
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
            <Grid container spacing={gridSpacing}>
                <Grid item xs={6}>
                    <SubCard title="방문등록">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={6} sm={6} md={10} lg={2}>
                                <Box
                                    sx={{
                                        margin: '10px',
                                        width: '100%'
                                    }}
                                >
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">확진 번호</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postDiaMallValues.coronicId}
                                            onChange={handleChange('coronicId')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={6} sm={6} md={10} lg={2}>
                                <Box
                                    sx={{
                                        margin: '10px'
                                    }}
                                >
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">매장명</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postDiaMallValues.placeId}
                                            onChange={handleChange('amount')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={6} sm={6} md={10} lg={2}>
                                <Box
                                    sx={{
                                        margin: '10px'
                                    }}
                                >
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">방문 날짜</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postDiaMallValues.visitedAt}
                                            onChange={handleChange('visitedAt')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container spacing={gridSpacing}>
                            <Divider />
                            <Grid item xs={6} sm={6} md={4} lg={2}>
                                <Box
                                    sx={{
                                        margin: '10px',
                                        marginLeft: '120px'
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
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default Diatrafficenroll;
