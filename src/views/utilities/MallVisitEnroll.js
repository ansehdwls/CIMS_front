/* eslint-disable consistent-return */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
// material-ui
import { Box, Card } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import config from 'config';
import TextFormControl from './FormController/TextFormControl';
import DateFormControl from './FormController/DateFormControl';
import AsyncSelectFormControl from './FormController/AsyncSelectFormControl';
import moment from 'moment';

// ===============================|| UI COLOR ||=============================== //
const MallVisitEnroll = () => {
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

  // const handleChangeDate = useCallback(
  //   (prop) => (date) => {
  //     setPostMallVisitValues({ ...postMallVisitValues, [prop]: moment(date).isValid() ? moment(date).valueOf() : undefined });
  //   },
  //   [postMallVisitValues]
  // );

  return (
    <SubCard title="매장 방문 정보" margin="middle" sx={{ height: '100%' }}>
      <TextFormControl label="매장명" value={postMallVisitValues.placeName} onChange={handleChange('placeName')} />
      <AsyncSelectFormControl
        placeholder="장소"
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
          setPostMallVisitValues({ ...postMallVisitValues, placeName: target });
        }}
      />
      {/* <DateFormControl label="구매일자" value={postMallVisitValues.placeId} onChange={handleChangeDate('placeId')} /> */}
    </SubCard>
  );
};

export default MallVisitEnroll;
