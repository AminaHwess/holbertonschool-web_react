import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  return (user) => dispatch(login(user));
};

export default useLogin; 