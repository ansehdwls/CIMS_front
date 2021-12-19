import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //

function createData(username, regsion, diadate, store, protein) {
    return { username, regsion, diadate, store, protein };
}

const rows = [
    createData('확진자(1011)', '북구', '2020-12-14', 'a가게 - b가게 - c가게'),
    createData('확진자(1014)', '북구', '2020-12-18', 'a가게 - b가게 - c가게'),
    createData('확진자(1016)', '달서구', '2020-12-18', 'a가게 - b가게 - c가게'),
    createData('확진자(1017)', '동구', '2020-12-19', 'a가게 - b가게 - c가게'),
    createData('확진자(1018)', '남구', '2020-12-19', 'a가게 - b가게 - c가게')
];

// ===============================|| UI COLOR ||=============================== //

const diatraffic = () => (
    <MainCard title="확진자 동선">
        <Grid container spacing={gridSpacing}>
            <Grid item>
                <TextField id="filled-search" label="검색" type="search" variant="standard" align="center" />
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">환자</TableCell>
                                <TableCell align="center">거주지</TableCell>
                                <TableCell align="center">확진일자</TableCell>
                                <TableCell align="left">이동경로</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{row.regsion}</TableCell>
                                    <TableCell align="center">{row.diadate}</TableCell>
                                    <TableCell align="left">{row.store}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </MainCard>
);

export default diatraffic;
