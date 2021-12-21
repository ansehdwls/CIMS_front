import PropTypes from 'prop-types';
import axios from 'axios';
import { Fragment, useEffect, useState, useCallback } from 'react';
// material-ui
import { Box, Card, Grid, Typography, Avatar, ButtonBase } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import config from 'config';
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
import { useNavigate } from 'react-router-dom';
import PaginationBar from './FormController/Pagination';
import config from 'config';
// ===============================|| COLOR BOX ||=============================== //

function createData(no, name, username, calories, fat, carbs, protein) {
  return { no, name, username, calories, fat, carbs, protein };
}

// ===============================|| UI COLOR ||=============================== //

const SideEffect = () => {
  const [postCount, setPostCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleChangePage = useCallback(
    (event, newPage) => {
      if (newPage) setPage(newPage);
    },
    [page]
  );
  const [postSideEffectValue, setpostSideEffectValue] = useState({
    vaccineName: undefined
  });
  let Searchtrue = false;
  const [SideEffectList, setSideEffectList] = useState([]);
  async function initialList() {
    if (Searchtrue) {
      try {
        const response = await axios({
          method: 'get',
          url: `${config.productionUrl}/api/side-effects?vaccineName=${postSideEffectValue.vaccineName}&page=${page - 1}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(response.data[0]);
        if (response.data[0].length === 0) {
          console.log('empty');
          alert('결과가 없습니다');
        }
        setSideEffectList(response.data[0]);
        setPostCount(response.data[1]);
        console.log(SideEffectList);
        Searchtrue = false;
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios({
          method: 'get',
          url: `${config.productionUrl}/api/side-effects?page=${page - 1}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(response.data[0]);
        if (response.data[0].length === 0) {
          console.log('empty');
        }
        setSideEffectList(response.data[0]);
        setPostCount(response.data[1]);
      } catch (e) {
        console.log(e.message);
      }
    }
  }
  useEffect(() => {
    initialList();
  }, [page]);
  const handleChange = useCallback(
    (prop) => (event) => {
      setpostSideEffectValue({ ...postSideEffectValue, [prop]: event.target.value });
    },
    [postSideEffectValue]
  );

  async function handleToggle() {
    Searchtrue = true;
    initialList();
  }
  return (
    <MainCard title="부작용">
      <Grid container spacing={gridSpacing}>
        <Box style={{ display: 'flex', align: 'right', width: '100%', justifyContent: 'space-between' }}>
          <Box />
          <Box>
            <TextField
              id="filled-search"
              display="flex"
              value={postSideEffectValue.vaccineName}
              onChange={handleChange('vaccineName')}
              label="검색"
              type="search"
              variant="standard"
            />
            <ButtonBase>
              <Avatar
                variant="rounded"
                sx={{
                  background: '#ffffff',
                  color: '#bdbdbd'
                }}
                onClick={() => {
                  handleToggle();
                }}
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
                <TableCell align="left">발현 후 지속시간</TableCell>
                <TableCell align="left">접종 후 경과시간</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SideEffectList
                ? SideEffectList.map((item, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="left">{item.vaccine ? item.vaccine : ''}</TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="left">{item.symptomSite}</TableCell>
                      <TableCell align="left">{item.durationHour}</TableCell>
                      <TableCell align="left">{item.elapsedHour}</TableCell>
                    </TableRow>
                  ))
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={gridSpacing} justifyContent="center">
          <PaginationBar page={page} itemCount={postCount} handleChangePage={handleChangePage} />
        </Grid>
      </Grid>
    </MainCard>
  );
};
export default SideEffect;