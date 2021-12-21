/* eslint-disable react/jsx-boolean-value */
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Box, Card, Button, ButtonBase, Breadcrumbs, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import DateFormControl from './FormController/DateFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import qs from 'qs';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

// ===============================|| UI COLOR ||=============================== //
const MallVisitEnroll = () => {
  const [postMallVisitValues, setPostMallVisitValues] = useState({
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

  const navigate = useNavigate();

  const handleChange = useCallback(
    (prop) => (event) => {
      setPostMallVisitValues({ ...postMallVisitValues, [prop]: event.target.value });
    },
    [postMallVisitValues]
  );

  async function enrollMallVisit() {
    try {
      const res = await axios({
        method: 'post',
        url: `${config.productionUrl}/api/malls/visitants`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: qs.stringify(postMallVisitValues)
      });
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  }
  const handleChangeDate = useCallback(
    (prop) => (date) => {
      setPostMallVisitValues({ ...postMallVisitValues, [prop]: moment(date).isValid() ? moment(date).valueOf() : undefined });
    },
    [postMallVisitValues]
  );

  console.log(postMallVisitValues);

  return (
    <MainCard sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px', height: '53px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontSize="large" color="black">
            매장 방문 등록
          </Typography>
        </Breadcrumbs>
      </Box>
      <AsyncSelectFormControl
        placeholder="방문지"
        required
        value={postMallVisitValues.placeName}
        getOptionLabel={(e) => e.place_name}
        getOptionValue={(e) => e.placeName}
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
          setPostMallVisitValues({
            ...postMallVisitValues,
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
      {postMallVisitValues.placeName && <TextFormControl label="장소명" readOnly={true} defaultValue={postMallVisitValues.placeName} />}
      {postMallVisitValues.categoryName && <TextFormControl label="분류" readOnly={true} defaultValue={postMallVisitValues.categoryName} />}
      {postMallVisitValues.phone && <TextFormControl label="전화번호" readOnly={true} defaultValue={postMallVisitValues.phone} />}
      {postMallVisitValues.addressName && (
        <TextFormControl label="지번 주소" readOnly={true} defaultValue={postMallVisitValues.addressName} />
      )}
      {postMallVisitValues.roadAddressName && (
        <TextFormControl label="도로명 주소" readOnly={true} defaultValue={postMallVisitValues.roadAddressName} />
      )}
      <DateFormControl label="방문일시" value={postMallVisitValues.visitedAt} onChange={handleChangeDate('visitedAt')} />
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
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              enrollMallVisit();
            }}
          >
            등록
          </Button>
        </ButtonBase>
      </Box>
    </MainCard>
  );
};

export default MallVisitEnroll;
