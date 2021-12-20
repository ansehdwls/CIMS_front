import PropTypes from 'prop-types';
import axios from 'axios';
import { Fragment, useEffect, useState, useCallback } from 'react';
// material-ui
import { Box, Card, Grid, Typography, Avatar, ButtonBase } from '@mui/material';
import { IconSearch } from '@tabler/icons';

// project imports
import * as React from 'react';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
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
import Input from '@mui/material/Input';
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

const SideEffectReport = () => {
  const [postSideEffectValue, setpostSideEffectValue] = useState({
    vaccineName: undefined
  });
  const rows = [];
  const [SideEffectList, setSideEffectList] = useState([]);
  async function initialList() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://52.78.166.38:5100/api/side-effects?page=0',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(response.data[0]);
      if (response.data[0].length === 0) {
        console.log('empty');
      }
      setSideEffectList(response.data[0]);
      console.log(SideEffectList);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    initialList();
  }, []);
  const handleChange = useCallback(
    (prop) => (event) => {
      setpostSideEffectValue({ ...postSideEffectValue, [prop]: event.target.value });
    },
    [postSideEffectValue]
  );

  async function handleToggle() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.17:5100/api/side-effects',
        data: postSideEffectValue
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <MainCard title="부작용 신고">
      <Grid container spacing={gridSpacing}>
        <Box style={{ display: 'flex', align: 'right', width: '100%', justifyContent: 'space-between' }}>
          <Box />
          <Box>
            <TextField id="filled-search" display="flex" label="검색" type="search" variant="standard">
              <Input value={postSideEffectValue.vaccineName} onChange={handleChange('vaccineName')} />
            </TextField>
            <ButtonBase>
              <Avatar
                variant="rounded"
                sx={{
                  background: '#ffffff',
                  color: '#bdbdbd'
                }}
                onClick={() => handleToggle}
                color="inherit"
              >
                <IconSearch stroke={1.0} size="1.3rem" />
              </Avatar>
            </ButtonBase>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NO.</TableCell>
                <TableCell align="left">백신명</TableCell>
                <TableCell align="left">증상부위</TableCell>
                <TableCell align="left">증상</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SideEffectList
                ? SideEffectList.map((item, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="left">{item.vaccine}</TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.symptomSite}</TableCell>
                    </TableRow>
                  ))
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </MainCard>
  );
};
export default SideEffectReport;
