import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography, Avatar, ButtonBase } from '@mui/material';
import { IconSearch } from '@tabler/icons';
// project imports
import axios from 'axios';
import { Fragment, useEffect, useState, useCallback } from 'react';
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
import Input from '@mui/material/Input';
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
const handleToggle = () => {
  console.log('search');
};
// ===============================|| UI COLOR ||=============================== //

const diatraffic = () => {
  const [postDiaTrafficValue, setpostDiaTrafficValue] = useState({
    diatraffic: undefined
  });

  async function initialList() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://52.78.166.38:5100/api/vaccinations?page=0',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    initialList();
  }, []);
  const handleChange = useCallback(
    (prop) => (event) => {
      setpostDiaTrafficValue({ ...postDiaTrafficValue, [prop]: event.target.value });
    },
    [postDiaTrafficValue]
  );

  async function handleToggle() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.0.17:5100/api/side-effects',
        data: postDiaTrafficValue
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <MainCard title="확진자 동선">
      <Grid container spacing={gridSpacing}>
        <Box style={{ display: 'flex', align: 'right', width: '100%', justifyContent: 'space-between' }}>
          <Box />
          <Box>
            <TextField id="filled-search" display="flex" label="검색" type="search" variant="standard">
              <Input value={postDiaTrafficValue.diatraffic} onChange={handleChange('diatraffic')} />
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
};
export default diatraffic;
