/* eslint-disable consistent-return */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
// material-ui
import { Box, Card, Button, ButtonBase } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import DateFormControl from './FormController/DateFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import moment from 'moment';
import { now } from 'lodash';
// ===============================|| UI COLOR ||=============================== //

const Diatrafficenroll = () => {
  const [postMallVisitValues, setPostMallVisitValues] = useState({
    companionNumber: undefined,
    visitedAt: undefined,
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
      setPostMallVisitValues({ ...postMallVisitValues, [prop]: event.target.value });
    },
    [postMallVisitValues]
  );
  async function handClickListner() {
    postMallVisitValues.visitedAt = new Date(now);
    try {
      console.log(postMallVisitValues);
      const response = await axios({
        method: 'post',
        url: `${config.productionUrl}/api/corona-patients/visitants`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        data: postMallVisitValues
      });
      alert('Success');
    } catch (e) {
      console.log(e);
    }
  }
  // const handleChangeDate = useCallback(
  //   (prop) => (date) => {
  //     setPostMallVisitValues({ ...postMallVisitValues, [prop]: moment(date).isValid() ? moment(date).valueOf() : undefined });
  //   },
  //   [postMallVisitValues]
  // );

  return (
    <SubCard title="확진자 정보" margin="middle" sx={{ height: '100%' }}>
      <AsyncSelectFormControl
        placeholder="방문한 매장을 입력하세요"
        required
        value={postMallVisitValues.placeName}
        getOptionLabel={(e) => e.place_name}
        getOptionValue={(e) => e.place_name}
        loadOptions={async (inputValue) => {
          try {
            const res =
              inputValue &&
              (await axios({
                method: 'get',
                url: `${config.kakaoKeywordUrl}?query=${inputValue}`,
                headers: {
                  Authorization: `KakaoAK ${config.kakaoAk}`
                }
              }));
            return res.data?.documents;
          } catch (error) {
            alert(error.message);
          }
        }}
        onChange={(target) => {
          console.log(target);
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
          });
        }}
      />
      <TextFormControl
        label="매장명"
        defaultValue="매장명 확인"
        readOnly="true"
        value={postMallVisitValues.placeName}
        onChange={handleChange('placeName')}
      />
      <TextFormControl
        defaultValue="매장 분류 확인"
        label="매장 분류"
        readOnly="true"
        value={postMallVisitValues.categoryName}
        onChange={handleChange('categoryName')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.placeId}
        onChange={handleChange('placeId')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.categoryGroupCode}
        onChange={handleChange('categoryGroupCode')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.categoryGroupName}
        onChange={handleChange('categoryGroupName')}
      />
      <TextFormControl
        defaultValue="매장 전화번호 확인"
        label="매장 전화번호"
        readOnly="true"
        value={postMallVisitValues.phone}
        onChange={handleChange('phone')}
      />
      <TextFormControl
        defaultValue="매장 주소 확인"
        label="매장 주소"
        readOnly="true"
        value={postMallVisitValues.addressName}
        onChange={handleChange('addressName')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.roadAddressName}
        onChange={handleChange('roadAddressName')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.latitude}
        onChange={handleChange('latitude')}
      />
      <TextFormControl
        sx={{ display: 'none' }}
        label=""
        readOnly="true"
        value={postMallVisitValues.longitude}
        onChange={handleChange('longitude')}
      />
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
              handClickListner();
            }}
          >
            Submit
          </Button>
        </ButtonBase>
      </Box>
      {/* <DateFormControl label="구매일자" value={postMallVisitValues.placeId} onChange={handleChangeDate('placeId')} /> */}
    </SubCard>
  );
};
export default Diatrafficenroll;
