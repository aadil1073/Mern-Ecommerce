import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { checkAuthAC } from './actions';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuthAC(navigate));
  },[])

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Outlet></Outlet>
  )
}

export default App;
