/* eslint-disable react/jsx-boolean-value */
/* eslint-disable consistent-return */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
// material-ui
import { Box, Breadcrumbs, Button, ButtonBase, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import DateFormControl from './FormController/DateFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import moment from 'moment';
import { useNavigate } from 'react-router';
import qs from 'qs';
// ===============================|| UI COLOR ||=============================== //

const CoronicEnroll = () => {
  const [postCoronicValues, setPostCoronicValues] = useState({
    companionNumber: undefined,
    visitedAt: +moment(),
    placeId: undefined,
    placeName: undefined,
    categoryName: undefined,
    categoryGroupCode: undefined,
    categoryGroupName: undefined,
    phone: undefined,
    addressName: undefined,
    roadAddressName: undefined,
    latitude: undefined,
    longitude: undefined
  });
  const handleChange = useCallback(
    (prop) => (event) => {
      setPostCoronicValues({ ...postCoronicValues, [prop]: event.target.value });
    },
    [postCoronicValues]
  );

  const navigate = useNavigate();

  async function enrollCoronic() {
    try {
      const res = await axios({
        method: 'post',
        url: `${config.productionUrl}/api/corona-patients/visitants`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: qs.stringify(postCoronicValues)
      });
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  }

  const handleChangeDate = useCallback(
    (prop) => (date) => {
      setPostCoronicValues({ ...postCoronicValues, [prop]: moment(date).isValid() ? moment(date).valueOf() : undefined });
    },
    [postCoronicValues]
  );

  return (
    <MainCard sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px', height: '53px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            확진자 등록
          </Typography>
        </Breadcrumbs>
      </Box>
      <AsyncSelectFormControl
        placeholder="방문지"
        required
        value={postCoronicValues.placeName}
        getOptionLabel={(e) => e.place_name}
        getOptionValue={(e) => e.place_name}
        loadOptions={async (inputValue) => {
          const res = await axios({
            method: 'get',
            url: `${config.kakaoKeywordUrl}?query=${inputValue}`,
            headers: {
              Authorization: `KakaoAK ${config.kakaoAk}`
            }
          });
          if (res.status < 400) return res.data?.documents;
        }}
        onChange={(target) =>
          setPostCoronicValues({
            ...postCoronicValues,
            placeName: target.place_name,
            categoryName: target.category_name,
            placeId: target.id,
            categoryGroupCode: target.category_group_code,
            categoryGroupName: target.category_group_name,
            phone: target.phone,
            addressName: target.address_name,
            roadAddressName: target.road_address_name,
            latitude: target.x,
            longitude: target.y
          })
        }
      />
      {postCoronicValues.placeName && <TextFormControl label="장소명" readOnly={true} defaultValue={postCoronicValues.placeName} />}
      {postCoronicValues.categoryName && <TextFormControl label="분류" readOnly={true} defaultValue={postCoronicValues.categoryName} />}
      {postCoronicValues.phone && <TextFormControl label="전화번호" readOnly={true} defaultValue={postCoronicValues.phone} />}
      {postCoronicValues.addressName && <TextFormControl label="지번 주소" readOnly={true} defaultValue={postCoronicValues.addressName} />}
      {postCoronicValues.roadAddressName && (
        <TextFormControl label="도로명 주소" readOnly={true} defaultValue={postCoronicValues.roadAddressName} />
      )}
      <DateFormControl label="방문일시" value={postCoronicValues.visitedAt} onChange={handleChangeDate('visitedAt')} />
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
          <Button variant="contained" size="small" onClick={() => enrollCoronic()}>
            등록
          </Button>
        </ButtonBase>
      </Box>
    </MainCard>
  );
};
export default CoronicEnroll;
