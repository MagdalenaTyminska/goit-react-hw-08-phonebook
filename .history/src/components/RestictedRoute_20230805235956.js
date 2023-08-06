import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hook/useAuth';

export const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRecirect = !isLoggedIn && !isRefreshing;

  return shouldRecirect ? component : <Navigate to={redirectTo} />;
};
