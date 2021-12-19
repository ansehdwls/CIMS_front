import PropTypes from 'prop-types';

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

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const SideEffectEnroll = () => (
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
                                    <InputLabel htmlFor="standard-adornment-amount">백신</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
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
                                    <InputLabel htmlFor="standard-adornment-amount">증상</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
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
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
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
                                    <Button variant="contained" size="small">
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

export default SideEffectEnroll;
