import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hook/useAuth';

export const ProtectedRoute = ({ component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRecirect = !isLoggedIn && !isRefreshing;

  return shouldRecirect ? <Navigate to={redirectTo} /> : component;
};
