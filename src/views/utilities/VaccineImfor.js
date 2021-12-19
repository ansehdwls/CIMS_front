import PropTypes from 'prop-types';
import * as React from 'react';
// material-ui
import { Box, Card, Grid } from '@mui/material';

// project imports
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>접종횟수</TableCell>
                                        <TableCell>접종량 및 방법</TableCell>
                                        <TableCell align="right">보관</TableCell>
                                        <TableCell align="right">개봉 후 유효기간</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
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
        '코미나티주',
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
        '모더나',
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
        '한국아스트라제네카코비드-19백신',
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
        '코비드19백신얀센주',
        '18세 이상',
        '21.04.07',
        '1회',
        '0.5㎖ 근육주사',
        '-25℃∼-15℃(24개월)',
        '2∼8℃ : 6시간 / 9~25℃ : 3시간'
    )
];
// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
    <MainCard title="백신 정보 확인">
        <Grid container spacing={gridSpacing}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>플랫폼</TableCell>
                            <TableCell align="right">제조사</TableCell>
                            <TableCell align="right">백신명</TableCell>
                            <TableCell align="right">연령</TableCell>
                            <TableCell align="right">허가일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </MainCard>
);

export default UtilitiesShadow;
