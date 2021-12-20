import axios from 'axios';
import config from 'config';
import qs from 'qs';

export const LOGOUT = 'cims/login/LOGOUT';
export const LOGIN_REQUEST = 'cims/login/LOGIN_REQUEST';
export const REFRESH_REQUEST = 'cims/login/REFRESH_REQUEST';
export const LOGIN_SUCCESS = 'cims/login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'cims/login/LOGIN_FAIL';

export function setLoginRequest() {
  return {
    type: LOGIN_REQUEST,
    data: {}
  };
}
export function setRefreshRequest() {
  return {
    type: REFRESH_REQUEST,
    data: {}
  };
}
export function setLoginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}
export function setLoginFail() {
  return {
    type: LOGIN_FAIL,
    data: {}
  };
}
export function setLogout() {
  return {
    type: LOGOUT,
    data: {}
  };
}

const initState = {
  type: LOGOUT,
  data: {}
};

export default function loginReducer(state = initState, action) {
  if (action.type === LOGIN_REQUEST) {
    return {
      type: action.type,
      data: {}
    };
  }

  if (action.type === REFRESH_REQUEST) {
    return {
      type: action.type,
      data: {}
    };
  }

  if (action.type === LOGIN_SUCCESS) {
    return {
      type: action.type,
      data: {
        accessToken: action.data.accessToken
      }
    };
  }

  if (action.type === LOGIN_FAIL) {
    return {
      type: action.type,
      data: {}
    };
  }

  if (action.type === LOGOUT) {
    return {
      type: action.type,
      data: {}
    };
  }

  return state;
}

export function loginThunk(loginInfo, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoginRequest());
      const res = await axios({
        method: 'post',
        url: `${config.productionUrl}/api/login`,
        data: qs.stringify(loginInfo)
      });
      if (res.status >= 400) {
        throw new Error(res.message);
      }
      console.log(res.data);
      localStorage.setItem('accessToken', res.data.access_token);
      dispatch(setLoginSuccess(res.data));
      navigate('/');
    } catch (error) {
      dispatch(setLoginFail());
      alert(error);
    }
  };
}

export function logoutThunk() {
  return async (dispatch) => {
    try {
      localStorage.clear();
      dispatch(setLogout());
    } catch (error) {
      alert(error);
    }
  };
}
