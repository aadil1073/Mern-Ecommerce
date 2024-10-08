
import { useDispatch } from 'react-redux';
import Footer from '../components/footer';
import LoginSignUp from '../components/login-signup';
import { loginAC, signUpAC } from '../actions';
import { useNavigate } from 'react-router-dom';

function LoginSignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const login = (user) => {
    dispatch(loginAC(user,navigate));
  }

  const signup = (user) => {
    dispatch(signUpAC(user,navigate))
  }

  return (
    <>
    <LoginSignUp login={login} signup={signup}/>
    <Footer />
    </>
  )
}
export default LoginSignUpPage;