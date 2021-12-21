import { Box, Typography, Avatar, ButtonBase, Breadcrumbs } from '@mui/material';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
// project imports
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconSearch } from '@tabler/icons';
import MainCard from 'ui-component/cards/MainCard';
import PaginationBar from './FormController/Pagination';
import config from 'config';
import { isArray } from 'lodash';
import qs from 'qs';

const UtilitiesShadow = () => {
  const [vaccineCount, setVaccineCount] = useState(0);
  const [page, setPage] = useState(1);
  const [vaccines, setVaccines] = useState([]);
  const [vaccineQuery, setVaccineQuery] = useState({
    vaccineName: undefined
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
      setVaccineQuery({ ...vaccineQuery, [prop]: event.target.value });
    },
    [vaccineQuery]
  );

  const handleSearchToggle = useCallback(() => {
    setSearchToggle(!searchToggle);
  }, [searchToggle]);

  async function getVaccines() {
    console.log(vaccineQuery);
    const res = await axios({
      method: 'get',
      url: `${config.productionUrl}/api/vaccines?${qs.stringify({ ...vaccineQuery, page: page - 1 })}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    if (res.status >= 400) {
      alert(res.data.message);
      return;
    }
    setVaccines(res.data[0]);
    setVaccineCount(res.data[1]);
  }

  useEffect(() => {
    getVaccines();
  }, [page, searchToggle]);

  return (
    <MainCard>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            백신 정보
          </Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="filled-search"
            value={vaccineQuery.vaccineName}
            onChange={handleChange('vaccineName')}
            label="백신"
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
              {['백신', '제조사', '권장 접종 횟수'].map((v) => (
                <TableCell align="right">{v}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isArray(vaccines) &&
              vaccines.map((v) => (
                <TableRow
                  key={v.vaccineId}
                  hover
                  // onClick={(e) => moveToDetailPage(e, v.vaccineId)}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" align="right" scope="row" width={200}>
                    {v.vaccineName}
                  </TableCell>
                  <TableCell align="right">{v?.manufacturer}</TableCell>
                  <TableCell align="right">{v?.recommendVaccinationNumber}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBar page={page} itemCount={vaccineCount} handleChangePage={handleChangePage} />
    </MainCard>
  );
};
export default UtilitiesShadow;
