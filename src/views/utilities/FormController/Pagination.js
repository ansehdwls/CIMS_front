import { Pagination, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function PaginationBar(props) {
  const { page, itemCount, handleChangePage } = props;
  return (
    <Stack style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
      <Pagination size="large" count={Math.ceil(itemCount / 10) || 1} page={page} onChange={handleChangePage} />
    </Stack>
  );
}

PaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired
};

export default PaginationBar;
