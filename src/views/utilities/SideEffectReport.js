import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import * as React from 'react';
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

function createData(no, name, username, calories, fat, carbs, protein) {
    return { no, name, username, calories, fat, carbs, protein };
}

const rows = [
    createData('1', '이*민', '2020-12-14', '화이자', '발열', '18시간'),
    createData('2', '김*하', '2020-12-18', '화이자', '발열', '20시간'),
    createData('3', '이*문', '2020-12-18', '화이자', '두통', '18시간'),
    createData('4', '김*은', '2020-12-19', '모더나', '오한', '25시간'),
    createData('5', '문*민', '2020-12-19', '모더나', '발열', '24시간')
];

// ===============================|| UI COLOR ||=============================== //

const SideEffectReport = () => (
    <MainCard title="부작용 신고">
        <Grid container spacing={gridSpacing}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NO.</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">신고일</TableCell>
                            <TableCell align="right">백신명</TableCell>
                            <TableCell align="right">증상</TableCell>
                            <TableCell align="center">접종 후 경과시간</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{row.no}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.username}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </MainCard>
);

export default SideEffectReport;
