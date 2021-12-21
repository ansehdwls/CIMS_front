import { Box, Typography, Avatar, ButtonBase, Breadcrumbs } from '@mui/material';
import { IconSearch } from '@tabler/icons';
// project imports
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import qs from 'qs';
import { isArray } from 'lodash';
import PaginationBar from './FormController/Pagination';
import moment from 'moment';

const Coronic = () => {
  const [coronicCount, setCoronicCount] = useState(0);
  const [page, setPage] = useState(1);
  const [coronics, setCoronic] = useState([]);
  const [coronicQuery, setCoronicQuery] = useState({
    placeName: undefined,
    visitedAt: undefined
  });
  const [searchToggle, setSearchToggle] = useState(false);

  const handleChangePage = useCallback(
    (event, newPage) => {
      if (newPage) setPage(newPage);
    },
    [page]
  );

  const handleChange = useCallback(
    (prop) => (event) => {
      setCoronicQuery({ ...coronicQuery, [prop]: event.target.value });
    },
    [coronicQuery]
  );

  const handleSearchToggle = useCallback(() => {
    setSearchToggle(!searchToggle);
  }, [searchToggle]);

  async function getCoronics() {
    console.log(coronicQuery);
    const res = await axios({
      method: 'get',
      url: `${config.productionUrl}/api/corona-patients/visitants?${qs.stringify({ ...coronicQuery, page: page - 1 })}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    if (res.status >= 400) {
      alert(res.data.message);
      return;
    }
    setCoronic(res.data[0]);
    setCoronicCount(res.data[1]);
  }

  useEffect(() => {
    getCoronics();
  }, [page, searchToggle]);

  return (
    <MainCard>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            확진자 정보
          </Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="filled-search"
            value={coronicQuery.placeName}
            onChange={handleChange('placeName')}
            label="장소"
            type="search"
            variant="standard"
            sx={{ marginBottom: 1 }}
          />
          <ButtonBase>
            <Avatar
              variant="rounded"
              sx={{
                background: '#ffffff',
                color: '#bdbdbd'
              }}
              onClick={handleSearchToggle}
              color="inherit"
            >
              <IconSearch stroke={2.0} size="1.5rem" />
            </Avatar>
          </ButtonBase>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {['장소', '주소', '방문 일시'].map((v) => (
                <TableCell align="right">{v}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isArray(coronics) &&
              coronics.map((v) => (
                <TableRow
                  key={v.coronicVisitId}
                  hover
                  // onClick={(e) => moveToDetailPage(e, v.coronicVisitId)}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" align="right" scope="row" width={400}>
                    {v?.place?.placeName}
                  </TableCell>
                  <TableCell align="right">{v?.place?.addressName || v?.place?.roadAddressName}</TableCell>
                  <TableCell align="right">{v?.visitedAt && moment(v?.visitedAt).format('YYYY-MM-DD hh:mm a')}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBar page={page} itemCount={coronicCount} handleChangePage={handleChangePage} />
    </MainCard>
  );
};
export default Coronic;
