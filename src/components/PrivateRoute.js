import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hook/useAuth';

export const PrivateRoute = ({ component, redirectTo }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRecirect = !isAuthorized && !isRefreshing;

  return shouldRecirect ? <Navigate to={redirectTo} /> : component;
};
