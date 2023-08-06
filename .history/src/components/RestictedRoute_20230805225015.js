import { Navigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth/useAuth';

export const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const { isAuthorized, isRefreshing } = useAuth();

  const shouldRecirect = !isAuthorized && !isRefreshing;

  return shouldRecirect ? component : <Navigate to={redirectTo} />;
};
