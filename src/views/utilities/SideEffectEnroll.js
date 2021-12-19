import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useEffect, useState, useCallback } from 'react';
// material-ui
import { Avatar, Box, Card, Button, ButtonBase, Grid, InputAdornment, Divider } from '@mui/material';
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

// ===============================|| UI COLOR ||=============================== //

const SideEffectEnroll = () => {
    const [postSideEffectValues, setpostSideEffectValues] = useState({
        vaccineName: undefined,
        name: undefined,
        symtomSite: undefined,
        durationHour: undefined,
        elpasedHour: undefined
    });

    async function handClickListner() {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://192.168.0.17:5100/api/side-effects',
                data: postSideEffectValues
            });
        } catch (e) {
            console.log(e);
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
                <Grid item xs={6}>
                    <SubCard title="부작용 정보">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={6} sm={6} md={10} lg={2}>
                                <Box
                                    sx={{
                                        margin: '10px',
                                        width: '100%'
                                    }}
                                >
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">백신명</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.vaccineName}
                                            onChange={handleChange('vaccineName')}
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
                                        <InputLabel htmlFor="standard-adornment-amount">부작용 증상</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.name}
                                            onChange={handleChange('name')}
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
                                        <InputLabel htmlFor="standard-adornment-amount">증상 부위</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.symtomSite}
                                            onChange={handleChange('symtomSitet')}
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
                                        <InputLabel htmlFor="standard-adornment-amount">발현 후 지속시간</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.durationHour}
                                            onChange={handleChange('durationHour')}
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
                                        <InputLabel htmlFor="standard-adornment-amount">접종 후 경과시간</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            value={postSideEffectValues.elpasedHour}
                                            onChange={handleChange('elpasedHour')}
                                            startAdornment={<InputAdornment position="start" />}
                                        />
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
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

export default SideEffectEnroll;
