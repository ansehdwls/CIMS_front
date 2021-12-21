import { Box, Typography, Avatar, ButtonBase, Breadcrumbs } from '@mui/material';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { IconSearch } from '@tabler/icons';
import config from 'config';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainCard from 'ui-component/cards/MainCard';
import { useNavigate } from 'react-router-dom';
import PaginationBar from './FormController/Pagination';
import qs from 'qs';
import { isArray } from 'lodash';

const SideEffect = () => {
  const [sideEffectCount, setSideEffectCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sideEffects, setSideEffects] = useState([]);
  const [vaccineQuery, setVaccineQuery] = useState({
    name: undefined,
    vaccineName: undefined,
    symptomSite: undefined
  });
  const [searchToggle, setSearchToggle] = useState(false);

  const navigate = useNavigate();

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
    const res = await axios({
      method: 'get',
      url: `${config.productionUrl}/api/side-effects?${qs.stringify({ ...vaccineQuery, page: page - 1 })}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    if (res.status >= 400) {
      alert(res.data.message);
      return;
    }
    setSideEffects(res.data[0]);
    setSideEffectCount(res.data[1]);
  }

  useEffect(() => {
    getVaccines();
  }, [page, searchToggle]);

  return (
    <MainCard>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            부작용
          </Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="filled-search"
            value={vaccineQuery.name}
            onChange={handleChange('name')}
            label="부작용"
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
              {['부작용', '백신', '발현 부위', '발현 지속시간', '접종후 경과시간'].map((v) => (
                <TableCell align="right">{v}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isArray(sideEffects) &&
              sideEffects.map((v) => (
                <TableRow key={v.sideEffectId} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" align="right" scope="row" width={200}>
                    {v.name}
                  </TableCell>
                  <TableCell align="right">{v?.vaccine?.vaccineName}</TableCell>
                  <TableCell align="right">{v?.symptomSite}</TableCell>
                  <TableCell align="right">{v?.durationHour}</TableCell>
                  <TableCell align="right">{v?.elapsedHour}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBar page={page} itemCount={sideEffectCount} handleChangePage={handleChangePage} />
    </MainCard>
  );
};
export default SideEffect;
