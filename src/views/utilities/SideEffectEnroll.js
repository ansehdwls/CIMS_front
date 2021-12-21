import axios from 'axios';
import { useState, useCallback } from 'react';
// material-ui
import { Box, Button, ButtonBase, Breadcrumbs, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

const SideEffectEnroll = () => {
  const [postSideEffectValues, setPostSideEffectValues] = useState({
    vaccineId: undefined,
    name: undefined,
    symptomSite: undefined,
    durationHour: undefined,
    elapsedHour: undefined
  });
  const navigate = useNavigate();

  async function enrollSideEffect() {
    try {
      await axios({
        method: 'post',
        url: `${config.productionUrl}/api/side-effects`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: qs.stringify(postSideEffectValues)
      });
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = useCallback(
    (prop) => (event) => {
      setPostSideEffectValues({ ...postSideEffectValues, [prop]: event.target.value });
    },
    [postSideEffectValues]
  );

  return (
    <MainCard sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px', height: '53px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            부작용 신고
          </Typography>
        </Breadcrumbs>
      </Box>
      <AsyncSelectFormControl
        placeholder="백신"
        required
        value={postSideEffectValues.vaccineName}
        getOptionLabel={(e) => e.vaccineName}
        getOptionValue={(e) => e.vaccineName}
        loadOptions={async (inputValue) => {
          const res = await axios({
            method: 'get',
            url: `${config.productionUrl}/api/vaccines?vaccineName=${inputValue}`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
          if (res.status < 400) return res.data[0];
        }}
        onChange={(target) =>
          setPostSideEffectValues({
            ...postSideEffectValues,
            vaccineId: target.vaccineId
          })
        }
      />
      <TextFormControl label="부작용 증상" value={postSideEffectValues.name} onChange={handleChange('name')} />
      <TextFormControl label="발현부위" value={postSideEffectValues.symptomSite} onChange={handleChange('symptomSite')} />
      <TextFormControl label="발현 지속시간(hour)" value={postSideEffectValues.durationHour} onChange={handleChange('durationHour')} />
      <TextFormControl label="접종후 경과시간(hour)" value={postSideEffectValues.elapsedHour} onChange={handleChange('elapsedHour')} />
      <Box
        component="form"
        sx={{
          margin: '10px',
          width: '100%',
          textAlign: 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <ButtonBase sx={{ borderRadius: '8px' }}>
          <Button variant="contained" size="small" onClick={() => enrollSideEffect()}>
            등록
          </Button>
        </ButtonBase>
      </Box>
    </MainCard>
  );
};

export default SideEffectEnroll;
