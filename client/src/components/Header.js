
import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINTS } from '../utils/constant';
import axios from 'axios';
import {setUser} from '../redux/userSlice.js'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

const Header = () => {
  const user = useSelector((store) => store.app.user);
  console.log("User from Redux:", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler =async() =>{
    try{
const res = await axios.get(`${API_END_POINTS}/logout`);
if(res.data.success){
  toast.success(res.data.message);
}


dispatch(setUser(null));
navigate('/');
console.log(res);
    }catch(error){
      console.log(error); 
    }
  }

  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black '>
      <img className='w-56' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt='logo' />
      {user && (
        <div className='flex items-center'>
          <IoIosArrowDropdown size='24px' color='white' />
          <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
          <div className='ml-4'>
            <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>LogOut</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
