import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import { LOGIN_SUCCESS } from 'store/login';
import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const loginStates = useSelector((state) => state.login);
  const isLogin = loginStates.type === LOGIN_SUCCESS;
  return useRoutes([MainRoutes(isLogin), AuthenticationRoutes], config.basename);
}
