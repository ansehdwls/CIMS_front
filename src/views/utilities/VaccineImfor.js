import PropTypes from 'prop-types';
import * as React from 'react';
// material-ui
import { Box, Card, Grid, Typography, Avatar, ButtonBase } from '@mui/material';
import axios from 'axios';
import { Fragment, useEffect, useState, useCallback } from 'react';
// project imports
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconSearch } from '@tabler/icons';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| SHADOW BOX ||=============================== //
function createData(name, calories, fat, carbs, protein, date, customerId, amount, time) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    history: [
      {
        date,
        customerId,
        amount,
        time
      }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="left">{row.fat}</TableCell>
        <TableCell align="left">{row.calories}</TableCell>
      </TableRow>
    </>
  );
}
const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800'
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }).isRequired
};
const rows = [
  createData(
    '화이자',
    '화이자 및 바이오엔텍',
    '2회, 21일',
    '12세 이상',
    '21.03.05',
    '2회, 21일',
    '희석된 백신 0.3㎖ 근육주사',
    '-90℃∼-60℃(6개월)',
    '희석 후 2∼25℃/6시간'
  ),
  createData(
    '모더나',
    '모더나코비드-19 백신주',
    '2회, 28일',
    '18세 이상',
    '21.05.21',
    '2회, 28일',
    '0.5㎖ 근육주사',
    '-25℃∼-15℃(7개월)',
    '2∼25℃/6시간'
  ),
  createData(
    '아스트로 제네카',
    '아스트라제네카',
    '2회, 8-12주',
    '18세 이상',
    '21.02.10',
    '2회, 8-12주',
    '0.5㎖ 근육주사',
    '2∼8℃(6개월)',
    '~30℃/6시간'
  ),
  createData(
    '얀센',
    '얀센 Johnson&Johnson',
    '1회',
    '18세 이상',
    '21.04.07',
    '1회',
    '0.5㎖ 근육주사',
    '-25℃∼-15℃(24개월)',
    '2∼8℃ : 6시간 / 9~25℃ : 3시간'
  )
];

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => {
  const [VaccineList, setVaccineList] = useState([]);
  const [getvaccineValue, setgetvaccineValue] = useState({
    vaccineName: undefined
  });
  let Searchtrue = false;
  async function initialList() {
    if (Searchtrue) {
      try {
        const response = await axios({
          method: 'get',
          url: `http://52.78.166.38:5100/api/vaccines?vaccineName=${getvaccineValue.vaccineName}&page=0`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(response.data[0]);
        setVaccineList(response.data[0]);
        Searchtrue = false;
        console.log(VaccineList);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios({
          method: 'get',
          url: 'http://52.78.166.38:5100/api/vaccines?page=0',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        console.log(response.data[0]);
        setVaccineList(response.data[0]);
        console.log(VaccineList);
      } catch (e) {
        console.log(e);
      }
    }
  }
  useEffect(() => {
    initialList();
  }, []);
  const handleChange = useCallback(
    (prop) => (event) => {
      setgetvaccineValue({ ...getvaccineValue, [prop]: event.target.value });
    },
    [getvaccineValue]
  );

  async function handleToggle() {
    Searchtrue = true;
    initialList();
  }
  return (
    <MainCard title="백신 정보 확인">
      <Grid container spacing={gridSpacing}>
        <Box style={{ display: 'flex', align: 'right', width: '100%', justifyContent: 'space-between' }}>
          <Box />
          <Box>
            <TextField
              id="filled-search"
              display="flex"
              value={getvaccineValue.vaccineName}
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
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell align="center">No.</TableCell>
                <TableCell align="left">백신명</TableCell>
                <TableCell align="left">권장횟수</TableCell>
                <TableCell align="left">제조사</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {VaccineList
                ? VaccineList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="left">{item.vaccineName}</TableCell>
                      <TableCell align="left">{item.recommendVaccinationNumber}</TableCell>
                      <TableCell align="left">{item.manufacturer}</TableCell>
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
export default UtilitiesShadow;
